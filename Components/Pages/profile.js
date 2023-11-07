import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import styles from '../Styles/styles';
import left from '../Pictures/left.png';
import right from '../Pictures/right.png';

const profile = ({navigation}) => {
  const [svgImage, setSvgImage] = useState(null);
  const seedOptions = [
    'Sheba', 'Princess', 'Abby', 'Harley', 'Bob', 'Snickers', 'Daisy', 'Callie', 'Luna', 'Smokey', 'George', 'Peanut', 'Nala', 'Socks', 'Sassy', 'Molly', 'Bailey', 'Garfield', 'Fluffy', 'Loki'
  ];
  const [selectedSeedIndex, setSelectedSeedIndex] = useState(0);

  useEffect(() => {
    const fetchSvg = async (seed) => {
      try {
        const response = await fetch(`https://api.dicebear.com/7.x/lorelei/svg/seed=${seed}`);
        if (response.ok) {
          const svgData = await response.text();
          setSvgImage(svgData);
        } else {
          console.error('Failed to fetch image');
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchSvg(seedOptions[selectedSeedIndex]);
  }, [selectedSeedIndex]);

  const goToNextSeed = () => {
    setSelectedSeedIndex((prevIndex) => (prevIndex + 1) % seedOptions.length);
  };

  const goToPreviousSeed = () => {
    setSelectedSeedIndex((prevIndex) => (prevIndex - 1 + seedOptions.length) % seedOptions.length);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity onPress={goToPreviousSeed} style={styles.arrowButton}>
          <Image source={left} style={styles.arrowIcon} />
        </TouchableOpacity>

        <View style={styles.profileImageContainer}>
          {svgImage && <Image source={{ uri: `data:image/svg+xml,${encodeURIComponent(svgImage)}` }} style={styles.profileImage} />}
        </View>

        <TouchableOpacity onPress={goToNextSeed} style={styles.arrowButton}>
          <Image source={right} style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>
      <View style= {styles.bottomContainer}>
        <TextInput placeholder={'Name'} style={styles.inputfield}/>
        <TextInput placeholder={'Username'} style={styles.inputfield}/>
        <TextInput placeholder={'Password'} style={styles.inputfield}/>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextbuttonText} onPress={() => navigation.navigate('Home')}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default profile;
