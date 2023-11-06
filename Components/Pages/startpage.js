import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../Styles/styles';
import yoga from '../Pictures/yoga.png';


const Start = () => {
  return (
    <View style={styles.container}>
      <View style={styles.questionBox}>
        <Image source={yoga} style={styles.image} />
        <Text style={styles.startText}>Welcome to</Text>
        <Text style={styles.startText1}>MindEase</Text>
    <View style= {styles.bottomContainer}>
        <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextbuttonText}>Next</Text>
        </TouchableOpacity>
        </View>
        </View>
    </View>
  );
};

export default Start;
