import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { openDatabase } from 'expo-sqlite';
import styles from '../Styles/styles';
import sign from '../Pictures/Signup.png';

const db = openDatabase('user.db');

const Signup = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [fullNameError, setFullNameError] = useState('');

  useEffect(() => {
    // Check if the database exists
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, fullName TEXT, email TEXT, username TEXT, password TEXT, profilePic TEXT, feedback TEXT);'
      );
    });
  }, []);

  const createUser = () => {
    setEmailError('');
    setPasswordError('');
    setUsernameError('');
    setFullNameError('');

    const errors = [];

    if (!username || !password) {
      errors.push('Username and password must be defined.');
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push('Password must contain at least one special character.');
    }

    if (!/[A-Z]/.test(password)) {
      errors.push('Password must contain at least one uppercase letter.');
    }

    if (!/[a-z]/.test(password)) {
      errors.push('Password must contain at least one lowercase letter.');
    }

    if (!/\d/.test(password)) {
      errors.push('Password must contain at least one number.');
    }

    if (password.length < 8) {
      errors.push('Password must be at least 8 characters long.');
    }

    if (!email.includes('@')) {
      errors.push('Invalid email address.');
    }

    if (username.length < 5) {
      errors.push('Username must be at least 5 characters long.');
    }

    if (fullName.length < 4) {
      errors.push('Full Name must be at least 4 characters long.');
    }

    // Check if the email already exists in the database
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM users WHERE email = ?',
        [email],
        (_, { rows }) => {
          if (rows.length > 0) {
            errors.push('Email is already in use. Please use a different one.');
            setEmailError('Email is already in use. Please use a different one.');
          }

          // Check if the username already exists in the database
          tx.executeSql(
            'SELECT * FROM users WHERE username = ?',
            [username],
            (_, { rows }) => {
              if (rows.length > 0) {
                errors.push('Username already exists. Use another one.');
                setUsernameError('Username already exists. Use another one.');
              }

              if (errors.length === 0) {
                // All validations passed, proceed to insert user
                db.transaction((tx) => {
                  tx.executeSql(
                    'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, fullName TEXT, email TEXT, username TEXT, password TEXT, profilePic TEXT, feedback TEXT);'
                  );
                  tx.executeSql(
                    'INSERT INTO users (fullName, email, username, password, profilePic, feedback) VALUES (?, ?, ?, ?, ?, ?)',
                    [fullName, email, username, password, 'Sheba', ''],
                    (_, { insertId, rows }) => {
                      console.log('User inserted with ID:', insertId);
                      // Navigate to the next screen
                      navigation.navigate('Test', {
                        username,
                        password,
                        profilePic: 'Sheba',
                      });
                    },
                    (tx, error) => {
                      console.error('Error inserting user data:', error);
                    }
                  );
                });
              } else {
                // Log and handle errors
                errors.forEach((error) => {
                  if (error.includes('Invalid email')) {
                    setEmailError(error);
                  }
                  if (error.includes('Password must')) {
                    setPasswordError((prev) => prev + '\n' + error);
                  }
                  if (error.includes('Username must')) {
                    setUsernameError((prev) => prev + '\n' + error);
                  }
                  if (error.includes('Full Name must')) {
                    setFullNameError((prev) => prev + '\n' + error);
                  }
                });
              }
            },
            (tx, error) => {
              console.error('Error checking username:', error);
            }
          );
        },
        (tx, error) => {
          console.error('Error checking email:', error);
        }
      );
    });
  };

  return (
    <ScrollView style={styles.container6}>
    <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{alignItems: 'center',}}>
      
        <View style={styles.bottomContainer}>
          <Image source={sign} style={styles.image} />

          {fullNameError !== '' && <Text style={styles.errorText}>{fullNameError}</Text>}
          <TextInput
            placeholder={'Full Name'}
            style={styles.inputfield}
            onChangeText={(text) => {
              setFullName(text);
              setFullNameError('');
            }}
            value={fullName}
          />

          {emailError !== '' && <Text style={styles.errorText}>{emailError}</Text>}
          <TextInput
            placeholder={'Email'}
            style={styles.inputfield}
            onChangeText={(text) => {
              setEmail(text);
              setEmailError('');
            }}
            value={email}
          />

          {usernameError !== '' && <Text style={styles.errorText}>{usernameError}</Text>}
          <TextInput
            placeholder={'Username'}
            style={styles.inputfield}
            onChangeText={(text) => {
              setUsername(text);
              setUsernameError('');
            }}
            value={username}
          />

          {passwordError !== '' && <Text style={styles.errorText}>{passwordError}</Text>}
          <TextInput
            placeholder={'Password'}
            style={styles.inputfield}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.nextButton} onPress={createUser}>
            <Text style={styles.nextbuttonText}>Register</Text>
          </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
      </ScrollView>
    
  );
};

export default Signup;