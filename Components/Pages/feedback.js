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
        <Image source={feedback} style={styles.image} />
          <View style={styles.bottomContainer}>
          <TextInput
            style={styles.input}
            onChangeText={handleTextChange}
            placeholder="Comments..."
            multiline={true} 
            numberOfLines={4} 
        />
          <TouchableOpacity style={styles.nextButton}>
            <Text style={styles.nextbuttonText} onPress={() => navigation.navigate('Home')}>Feedback</Text>
          </TouchableOpacity>
          </View>
      </View>
    );
  };
  
  export default Feedback;