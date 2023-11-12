import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import styles from '../Styles/styles';
import left from '../Pictures/left.png';
import right from '../Pictures/right.png';


const images = {
  Callie: require('../Pictures/Callie.png'),
  Abby: require('../Pictures/Abby.png'),
  Whiskers: require('../Pictures/Whiskers.png'),
  Sheba: require('../Pictures/Sheba.png'),
  Oliver: require('../Pictures/Oliver.png'),
  Sassy: require('../Pictures/Sassy.png'),
  Sugar: require('../Pictures/Sugar.png'),
  Chester: require('../Pictures/Chester.png'),
  Mimi: require('../Pictures/Mimi.png'),
  Simba: require('../Pictures/Simba.png'),
  Leo: require('../Pictures/Leo.png'),
  Snickers: require('../Pictures/Snickers.png'),
  Cookie: require('../Pictures/Cookie.png'),
  Trouble: require('../Pictures/Trouble.png'),
  Milo: require('../Pictures/Milo.png'),
  Zoey: require('../Pictures/Zoey.png'),
  Cuddles: require('../Pictures/Cuddles.png'),
  Chloe: require('../Pictures/Chloe.png'),
  Midnight: require('../Pictures/Midnight.png'),
  Willow: require('../Pictures/Willow.png'),
  Maggie: require('../Pictures/Maggie.png'),
  Harley: require('../Pictures/Harley.png'),
  Samantha: require('../Pictures/Samantha.png'),
  Coco: require('../Pictures/Coco.png'),
  Cleo: require('../Pictures/Cleo.png'),
  Lily: require('../Pictures/Lily.png'),
  Rascal: require('../Pictures/Rascal.png'),
  Bandit: require('../Pictures/Bandit.png'),
  Nala: require('../Pictures/Nala.png'),
  Tigger: require('../Pictures/Tigger.png'),
};

const Profile = ({ navigation, route }) => {
  const { selectedSeedName } = route.params || { selectedSeedName: 'Sheba' };

  const seedOptions = Object.keys(images);
  const [selectedSeedIndex, setSelectedSeedIndex] = useState(seedOptions.indexOf(selectedSeedName));

  const currentSeed = seedOptions[selectedSeedIndex];

  const goToNextSeed = () => {
    setSelectedSeedIndex((prevIndex) => (prevIndex + 1) % seedOptions.length);
  };

  const goToPreviousSeed = () => {
    setSelectedSeedIndex((prevIndex) => (prevIndex - 1 + seedOptions.length) % seedOptions.length);
  };

  const saveProfile = () => {
    const selectedSeedName = seedOptions[selectedSeedIndex];
    console.log(selectedSeedName);
    navigation.navigate('Home', { selectedSeedName: selectedSeedName });
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity onPress={goToPreviousSeed} style={styles.arrowButton}>
          <Image source={left} style={styles.arrowIcon} />
        </TouchableOpacity>

        <View style={styles.profileImageContainer}>
          <Image source={images[currentSeed]} style={styles.profileImage} />
        </View>

        <TouchableOpacity onPress={goToNextSeed} style={styles.arrowButton}>
          <Image source={right} style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <TextInput placeholder={'Name'} style={styles.inputfield} />
        <TextInput placeholder={'Username'} style={styles.inputfield} />
        <TextInput placeholder={'Password'} style={styles.inputfield} secureTextEntry={true} />
        <TouchableOpacity style={styles.nextButton} onPress={saveProfile}>
          <Text style={styles.nextbuttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;