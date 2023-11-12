import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import feedback from '../Pictures/feedback.png';
import styles from '../Styles/styles';
import bell from '../Pictures/bell.png';

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


const Feedback = ({navigation,route}) => {
    const handleTextChange = (inputText) => {
        setText(inputText);
      };

      const { selectedSeedName } = route.params;
      console.log(selectedSeedName);
    
      const conso = () => {
        console.log('Notification pressed');
      };
    
      const selectedSeedImage = imageMapping[selectedSeedName];
    
      return (
        <View style={styles.container2}>
          <View style={{ backgroundColor: '#ffffff', paddingHorizontal: 15 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}></View>
              <TouchableOpacity style={styles.notif} onPress={conso}>
                <Image source={bell} style={styles.bell} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.profileImageContainerSmall} onPress={() => navigation.navigate('Profile', { selectedSeedName })}>
                <Image source={selectedSeedImage} style={styles.profileImage}/> 
              </TouchableOpacity>
            </View>
            </View>
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
            <Text style={styles.nextbuttonText} onPress={() => navigation.navigate('Home', { selectedSeedName: selectedSeedName })}>Feedback</Text>
          </TouchableOpacity>
          </View>
      </View>
      </View>
    );
  };
  
  export default Feedback;