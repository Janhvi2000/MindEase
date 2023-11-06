import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import sign from '../Pictures/Signup.png';
import styles from '../Styles/styles';



const Signup = ({navigation}) => {
    return (
      <View style={styles.container}>
          <Image source={sign} style={styles.image} />
          <View style= {styles.bottomContainer}>
          <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextbuttonText} onPress={() => navigation.navigate('Home')}>Register with Google</Text>
        </TouchableOpacity>
        <View style={styles.line}/>
            <TextInput placeholder={'Full Name'} style={styles.inputfield}/>
            <TextInput placeholder={'Email'} style={styles.inputfield}/>
            <TextInput placeholder={'Username'} style={styles.inputfield}/>
            <TextInput placeholder={'Password'} style={styles.inputfield}/>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextbuttonText} onPress={() => navigation.navigate('Test')}>Register</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default Signup;