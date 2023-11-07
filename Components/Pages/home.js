import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import home from '../Pictures/home.png';
import styles from '../Styles/styles';



const Home = ({navigation}) => {
    return (
      <View style={styles.container}>
          <Image source={home} style={styles.image} />
          <TouchableOpacity style={styles.secondButton}>
            <Text style={styles.secondbuttonText} onPress={() => navigation.navigate('Crisis')}>Crisis Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondButton}>
            <Text style={styles.secondbuttonText}>Personal Progress</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondButton}>
            <Text style={styles.secondbuttonText}>Resource Library</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondButton}>
            <Text style={styles.secondbuttonText} onPress={() => navigation.navigate('Feedback')}>Feedback</Text>
          </TouchableOpacity>
      </View>
    );
  };
  
  export default Home;