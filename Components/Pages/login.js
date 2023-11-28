import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import login from '../Pictures/Login.png';
import styles from '../Styles/styles';
import { openDatabase } from 'expo-sqlite';

const db = openDatabase('user.db');

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM users WHERE username = ? AND password = ?',
        [username, password],
        (_, { rows }) => {
          const user = rows.item(0);
          if (user) {
            console.log('Logged in:', user);
            navigation.navigate('Home', {
              username,
              password,
              profilePic: user.profilePic, 
            });
          } else {
            console.log('Invalid credentials');
          }
        },
        (tx, error) => {
          console.error(error);
        }
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.bottomContainer}>
        <Image source={login} style={styles.image} />
        <View style={styles.line} />
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
          onPress={() => loginUser()}
        >
          <Text style={styles.nextbuttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
