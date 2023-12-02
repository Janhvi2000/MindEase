import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import login from '../Pictures/Login.png';
import styles from '../Styles/styles';
import { openDatabase } from 'expo-sqlite';

const db = openDatabase('user.db');

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const loginUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM users WHERE username = ?',
        [username],
        (_, { rows }) => {
          const user = rows.item(0);

          if (user) {
            // If the username exists in the database
            if (user.password === password) {
              // Password is correct
              console.log('Logged in:', user);
              navigation.navigate('Home', {
                username,
                password,
                profilePic: user.profilePic,
              });
            } else {
              // Incorrect password
              setErrorMessage('Incorrect password');
            }
          } else {
            // Username not in the database
            setErrorMessage('Username not found');
          }
        },
        (tx, error) => {
          console.error(error);
          setErrorMessage('Error logging in');
        }
      );
    });
  };

  return (
    <ScrollView style={styles.container6}>
      <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{alignItems: 'center',}}>
        <View style={styles.bottomContainer}>
          <Image source={login} style={styles.image} />
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

{errorMessage ? <Text style={styles.errorText1}>{errorMessage}</Text> : null}
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => loginUser()}
          >
          <Text style={styles.nextbuttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Login;