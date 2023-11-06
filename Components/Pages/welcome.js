import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../Styles/styles';
import welcome from '../Pictures/welcome.png';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.startBox}>
        <Image source={welcome} style={styles.image} />
      </View>
      <View style= {styles.buttonContainer}>
        <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextbuttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondButton}>
          <Text style={styles.secondbuttonText}>Sign up</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

export default Welcome;
