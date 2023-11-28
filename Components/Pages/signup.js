import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { openDatabase } from 'expo-sqlite';
import styles from '../Styles/styles';
import sign from '../Pictures/Signup.png';

const db = openDatabase('user.db');

const Signup = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const createUser = () => {
    if (!username || !password) {
      console.error('Username and password must be defined.');
      return;
    }
  
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, fullName TEXT, email TEXT, username TEXT, password TEXT, profilePic TEXT, feedback TEXT);'
      );
      tx.executeSql(
        'INSERT INTO users (fullName, email, username, password, profilePic, feedback) VALUES (?, ?, ?, ?, ?, ?)',
        [fullName, email, username, password, 'Sheba', ''],
        (_, { insertId, rows }) => {
          console.log('User inserted with ID:', insertId);
        },
        (tx, error) => {
          console.error('Error inserting user data:', error);
        }
      );
    });
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.bottomContainer}>
        <Image source={sign} style={styles.image} />
        <TextInput
          placeholder={'Full Name'}
          style={styles.inputfield}
          onChangeText={(text) => setFullName(text)}
        />
        <TextInput
          placeholder={'Email'}
          style={styles.inputfield}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder={'Username'}
          style={styles.inputfield}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          placeholder={'Password'}
          style={styles.inputfield}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => {
            createUser();
            navigation.navigate('Test', {
              username,
              password,
              profilePic: 'Sheba',
            });
          }}
        >
          <Text style={styles.nextbuttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
