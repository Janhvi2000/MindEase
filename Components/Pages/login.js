import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import login from '../Pictures/Login.png';
import styles from '../Styles/styles';



const Login = ({navigation}) => {
    return (
      <View style={styles.container}>
          <View style= {styles.bottomContainer}>
          <Image source={login} style={styles.image} />
          <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextbuttonText} onPress={() => navigation.navigate('Home')}>Login with Google</Text>
        </TouchableOpacity>
        <View style={styles.line}/>
            <TextInput placeholder={'Username'} style={styles.inputfield}/>
            <TextInput placeholder={'Password'} style={styles.inputfield}/>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextbuttonText} onPress={() => navigation.navigate('Home')}>Login</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default Login;