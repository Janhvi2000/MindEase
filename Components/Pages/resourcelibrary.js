import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Linking, ActivityIndicator } from 'react-native';
import { Image } from 'expo-image';
import styles from '../Styles/styles';
import left from '../Pictures/left.png';
import right from '../Pictures/right.png';
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

const Resource = ({ navigation, route }) => {
  const [selectedSeedIndex, setSelectedSeedIndex] = useState(0);
  const { selectedSeedName } = route.params || { selectedSeedName: 'Sheba' };
  const selectedSeedImage = imageMapping[selectedSeedName];
  const videoIds = ["2diE_SuSQAw", "pes7H4ECTdw", "RPyzPH8sB2A", "aOGP3mltnZE", "MGdgUP8XLwc", "hEfCxEdDtGU", "0Yr4hyFSJPk", "xQ2XroDdSAs", "W14E1nUY95U", "4DzFFVZPCw4", "gHf-L0uXffU", "BOWMIsUUfCA"];

  const conso = () => {
    console.log('Notification pressed');
  };

  const openLink = (videoId) => {
    const youtubeLink = `https://www.youtube.com/watch?v=${videoId}`;
    Linking.openURL(youtubeLink).catch((err) =>
      console.error('Error opening YouTube link:', err)
    );
  };

  const goToNextSeed = () => {
    setSelectedSeedIndex((prevIndex) => (prevIndex + 1) % playlistIds.length);
  };

  const goToPreviousSeed = () => {
    setSelectedSeedIndex(
      (prevIndex) => (prevIndex - 1 + playlistIds.length) % playlistIds.length
    );
  };

  return (
    <View>
      <View style={{ backgroundColor: '#ffffff', paddingHorizontal: 15 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}></View>
          <TouchableOpacity style={styles.notif} onPress={conso}>
            <Image source={bell} style={styles.bell} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileImageContainerSmall}
            onPress={() =>
              navigation.navigate('Profile', { selectedSeedName })
            }
          >
            <Image source={selectedSeedImage} style={styles.profileImage} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView horizontal style={styles.container3}>
        <TouchableOpacity onPress={goToPreviousSeed} style={styles.arrowButton}>
          <Image source={left} style={styles.arrowIcon} />
        </TouchableOpacity>

        <View style={styles.container4}>
          {videoIds.map((videoId, index) => (
            <TouchableOpacity
              key={index}
              style={styles.image1}
              onPress={() => openLink(videoId)}
            >
              <Image
                style={styles.image}
                source={{ uri: `https://img.youtube.com/vi/${videoId}/0.jpg` }}
                placeholder='image'
                transition={1000}
              />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity onPress={goToNextSeed} style={styles.arrowButton}>
          <Image source={right} style={styles.arrowIcon} />
        </TouchableOpacity>
      </ScrollView>
    </View>
)};

export default Resource;