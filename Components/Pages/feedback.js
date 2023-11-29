import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, ScrollView, Keyboard } from 'react-native';
import feedback from '../Pictures/feedback.png';
import styles from '../Styles/styles';
import bell from '../Pictures/bell.png';
import { openDatabase } from 'expo-sqlite';

import Callie from '../Pictures/Callie.png'; 
import Abby from '../Pictures/Abby.png';
import Whiskers from '../Pictures/Whiskers.png';
import Sheba from '../Pictures/Sheba.png';
import Oliver from '../Pictures/Oliver.png';
import Sassy from '../Pictures/Sassy.png';
import Sugar from '../Pictures/Sugar.png';
import Chester from '../Pictures/Chester.png';
import Mimi from '../Pictures/Mimi.png';
import Simba from '../Pictures/Simba.png';
import Leo from '../Pictures/Leo.png';
import Snickers from '../Pictures/Snickers.png';
import Cookie from '../Pictures/Cookie.png';
import Trouble from '../Pictures/Trouble.png';
import Milo from '../Pictures/Milo.png';
import Zoey from '../Pictures/Zoey.png';
import Cuddles from '../Pictures/Cuddles.png';
import Chloe from '../Pictures/Chloe.png';
import Midnight from '../Pictures/Midnight.png';
import Willow from '../Pictures/Willow.png';
import Maggie from '../Pictures/Maggie.png';
import Harley from '../Pictures/Harley.png';
import Samantha from '../Pictures/Samantha.png';
import Coco from '../Pictures/Coco.png';
import Cleo from '../Pictures/Cleo.png';
import Lily from '../Pictures/Lily.png';
import Rascal from '../Pictures/Rascal.png';
import Bandit from '../Pictures/Bandit.png';
import Nala from '../Pictures/Nala.png';
import Tigger from '../Pictures/Tigger.png';

const imageMapping = {
  Callie: Callie,
  Abby: Abby,
  Whiskers: Whiskers,
  Sheba: Sheba,
  Oliver: Oliver,
  Sassy: Sassy,
  Sugar: Sugar,
  Chester: Chester,
  Mimi: Mimi,
  Simba: Simba,
  Leo: Leo,
  Snickers: Snickers,
  Cookie: Cookie,
  Trouble: Trouble,
  Milo: Milo,
  Zoey: Zoey,
  Cuddles: Cuddles,
  Chloe: Chloe,
  Midnight: Midnight,
  Willow: Willow,
  Maggie: Maggie,
  Harley: Harley,
  Samantha: Samantha,
  Coco: Coco,
  Cleo: Cleo,
  Lily: Lily,
  Rascal: Rascal,
  Bandit: Bandit,
  Nala: Nala,
  Tigger: Tigger,
};

const db = openDatabase('user.db');

const Feedback = ({ navigation, route }) => {
  const { username, password, profilePic } = route.params;
  const selectedSeedName = profilePic;
  const selectedSeedImage = imageMapping[selectedSeedName];

  const [text, setText] = useState('');

  const conso = () => {
    console.log('Notification pressed');
  };

  const handleTextChange = (inputText) => {
    setText(inputText);
  };

  const saveFeedback = () => {
    if (!text) {
      console.error('Feedback cannot be empty.');
      return;
    }

    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE users SET feedback = ? WHERE username = ? AND password = ?',
        [text, username, password],
        (_, result) => {
          console.log('Feedback updated successfully');
          navigation.navigate('Home', { selectedSeedName: selectedSeedName });
        },
        (tx, error) => {
          console.error('Error updating feedback:', error);
        }
      );
    });
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const goToProfile = () => {
    navigation.navigate('Profile', {
      username: route.params.username,
      password: route.params.password,
      profilePic: selectedSeedName,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard} accessible={false}>
      <View style={styles.container2}>
        <View style={{ backgroundColor: '#ffffff', paddingHorizontal: 15 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}></View>
            <TouchableOpacity style={styles.notif} onPress={conso}>
              <Image source={bell} style={styles.bell} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileImageContainerSmall} onPress={goToProfile}>
              <Image source={selectedSeedImage} style={styles.profileImage}/> 
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <Image source={feedback} style={styles.image} />
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <TextInput
            style={styles.input}
            onChangeText={handleTextChange}
            placeholder="Comments..."
            multiline={true}
            numberOfLines={2}
            onSubmitEditing={Keyboard.dismiss}
          />
          </TouchableWithoutFeedback>
          <TouchableOpacity style={styles.nextButton} onPress={saveFeedback}>
            <Text style={styles.nextbuttonText}>Save Feedback</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Feedback;