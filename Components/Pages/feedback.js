import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import feedback from '../Pictures/feedback.png';
import styles from '../Styles/styles';


const Feedback = ({navigation}) => {
    const handleTextChange = (inputText) => {
        setText(inputText);
      };


    return (
      <View style={styles.container}>
          <View style={styles.bottomContainer}>
          <Image source={feedback} style={styles.image} />
          <TextInput
            style={styles.input}
            onChangeText={handleTextChange}
            placeholder="Comments..."
            multiline={true} 
            numberOfLines={3} 
        />
          <TouchableOpacity style={styles.nextButton}>
            <Text style={styles.nextbuttonText} onPress={() => navigation.navigate('Home')}>Feedback</Text>
          </TouchableOpacity>
          </View>
      </View>
    );
  };
  
  export default Feedback;