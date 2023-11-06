import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../Styles/styles';
import yoga from '../Pictures/yoga.png';

const Start = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.bottomContainer}>
        <Image source={yoga} style={styles.image} />
        <Text style={styles.startText}>Welcome to</Text>
        <Text style={styles.startText1}>MindEase</Text>
          <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Welcome')}>
            <Text style={styles.nextbuttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default Start;
