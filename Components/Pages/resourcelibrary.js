import React, { useState, useEffect } from 'react';
import { View,Text, StyleSheet, TouchableOpacity, ScrollView, Linking, ActivityIndicator } from 'react-native';
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

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const videoIds = ["2diE_SuSQAw", "pes7H4ECTdw", "RPyzPH8sB2A", "aOGP3mltnZE", "MGdgUP8XLwc", "hEfCxEdDtGU", "0Yr4hyFSJPk", "xQ2XroDdSAs", "W14E1nUY95U", "4DzFFVZPCw4", "gHf-L0uXffU", "BOWMIsUUfCA"];

const Resource = ({ navigation, route }) => {
  const [selectedSeedIndex1, setSelectedSeedIndex1] = useState(0);
  const [selectedSeedIndex2, setSelectedSeedIndex2] = useState(0);
  const [selectedSeedIndex3, setSelectedSeedIndex3] = useState(0);
  const [selectedSeedIndex4, setSelectedSeedIndex4] = useState(0);

  const { username, password, profilePic } = route.params;
  const selectedSeedName = profilePic;
  const selectedSeedImage = imageMapping[selectedSeedName];

  const openLink = (videoId) => {
    const youtubeLink = `https://www.youtube.com/watch?v=${videoId}`;
    Linking.openURL(youtubeLink).catch((err) =>
      console.error('Error opening YouTube link:', err)
    );
  };

  const conso = () => {
    console.log('Notification pressed');
  };

  const getCurrentAndNextVideos1 = () => {
    const currentIndex = selectedSeedIndex1 % videoIds.length;
    const nextIndex = (currentIndex + 1) % videoIds.length;
    return [videoIds[currentIndex], videoIds[nextIndex]];
  };

  const getCurrentAndNextVideos2 = () => {
    const currentIndex = selectedSeedIndex2 % videoIds.length;
    const nextIndex = (currentIndex + 1) % videoIds.length;
    return [videoIds[currentIndex], videoIds[nextIndex]];
  };

  const getCurrentAndNextVideos3 = () => {
    const currentIndex = selectedSeedIndex3 % videoIds.length;
    const nextIndex = (currentIndex + 1) % videoIds.length;
    return [videoIds[currentIndex], videoIds[nextIndex]];
  };

  const getCurrentAndNextVideos4 = () => {
    const currentIndex = selectedSeedIndex4 % videoIds.length;
    const nextIndex = (currentIndex + 1) % videoIds.length;
    return [videoIds[currentIndex], videoIds[nextIndex]];
  };

  const goToNextSeed = () => {
    setSelectedSeedIndex1((prevIndex) => prevIndex + 1);
  };

  const goToPreviousSeed = () => {
    setSelectedSeedIndex1((prevIndex) => prevIndex - 1);
  };

  const goToNextSeed1 = () => {
    setSelectedSeedIndex2((prevIndex) => prevIndex + 1);
  };

  const goToPreviousSeed1 = () => {
    setSelectedSeedIndex2((prevIndex) => prevIndex - 1);
  };

  const goToNextSeed2 = () => {
    setSelectedSeedIndex3((prevIndex) => prevIndex + 1);
  };

  const goToPreviousSeed2 = () => {
    setSelectedSeedIndex3((prevIndex) => prevIndex - 1);
  };

  const goToNextSeed3 = () => {
    setSelectedSeedIndex4((prevIndex) => prevIndex + 1);
  };

  const goToPreviousSeed3 = () => {
    setSelectedSeedIndex4((prevIndex) => prevIndex - 1);
  };

  const goToProfile = () => {
    navigation.navigate('Profile', {
      username: route.params.username,
      password: route.params.password,
      profilePic: selectedSeedName,
    });
  };

  return (
    <View style={styles.container4}>
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

      <Text style={styles.text1}>Guided Videos</Text>
      <View style={styles.container5}>
          <TouchableOpacity onPress={goToPreviousSeed} style={styles.arrowButton}>
            <Image source={left} style={styles.arrowIcon} />
          </TouchableOpacity>
          {getCurrentAndNextVideos1().map((videoId, index) => (
            <TouchableOpacity
              key={index}
              style={styles.imageContainer}
              onPress={() => openLink(videoId)}
            >
              <Image
                style={styles.image1}
                source={{ uri: `https://img.youtube.com/vi/${videoId}/0.jpg` }}
                placeholder={blurhash}
                transition={1000}
              />
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={goToNextSeed} style={styles.arrowButton}>
            <Image source={right} style={styles.arrowIcon} />
          </TouchableOpacity>
      </View>
      <Text style={styles.text1}>Pathways</Text>
      <View style={styles.container5}>
          <TouchableOpacity onPress={goToPreviousSeed1} style={styles.arrowButton}>
            <Image source={left} style={styles.arrowIcon} />
          </TouchableOpacity>
          {getCurrentAndNextVideos2().map((videoId, index) => (
            <TouchableOpacity
              key={index}
              style={styles.imageContainer}
              onPress={() => openLink(videoId)}
            >
              <Image
                style={styles.image1}
                source={{ uri: `https://img.youtube.com/vi/${videoId}/0.jpg` }}
                placeholder={blurhash}
                transition={1000}
              />
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={goToNextSeed1} style={styles.arrowButton}>
            <Image source={right} style={styles.arrowIcon} />
          </TouchableOpacity>
      </View>
      <Text style={styles.text1}>Recommendations</Text>
      <View style={styles.container5}>
          <TouchableOpacity onPress={goToPreviousSeed2} style={styles.arrowButton}>
            <Image source={left} style={styles.arrowIcon} />
          </TouchableOpacity>
          {getCurrentAndNextVideos3().map((videoId, index) => (
            <TouchableOpacity
              key={index}
              style={styles.imageContainer}
              onPress={() => openLink(videoId)}
            >
              <Image
                style={styles.image1}
                source={{ uri: `https://img.youtube.com/vi/${videoId}/0.jpg` }}
                placeholder={blurhash}
                transition={1000}
              />
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={goToNextSeed2} style={styles.arrowButton}>
            <Image source={right} style={styles.arrowIcon} />
          </TouchableOpacity>
      </View>
      <Text style={styles.text1}>Other</Text>
      <View style={styles.container5}>
          <TouchableOpacity onPress={goToPreviousSeed3} style={styles.arrowButton}>
            <Image source={left} style={styles.arrowIcon} />
          </TouchableOpacity>
          {getCurrentAndNextVideos4().map((videoId, index) => (
            <TouchableOpacity
              key={index}
              style={styles.imageContainer}
              onPress={() => openLink(videoId)}
            >
              <Image
                style={styles.image1}
                source={{ uri: `https://img.youtube.com/vi/${videoId}/0.jpg` }}
                placeholder={blurhash}
                transition={1000}
              />
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={goToNextSeed3} style={styles.arrowButton}>
            <Image source={right} style={styles.arrowIcon} />
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default Resource;