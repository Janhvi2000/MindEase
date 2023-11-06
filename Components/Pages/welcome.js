import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../Styles/styles';
import welcome from '../Pictures/welcome.png';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style= {styles.bottomContainer}>
      <Image source={welcome} style={styles.image} />
        <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextbuttonText} onPress={() => navigation.navigate('Login')}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondButton}>
          <Text style={styles.secondbuttonText} onPress={() => navigation.navigate('Signup')}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
