import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../Styles/styles';
import yoga from '../Pictures/yoga.png';


const Start = () => {
  return (
    <View style={styles.container}>
      <View style={styles.startBox}>
        <Image source={yoga} style={styles.image} />
        <Text style={styles.startText}>Welcome to</Text>
        <Text style={styles.startText1}>MindEase</Text>
      </View>
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextbuttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Start;
