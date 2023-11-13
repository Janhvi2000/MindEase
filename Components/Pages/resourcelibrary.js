import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, ScrollView, Linking, ActivityIndicator } from 'react-native';
import * as VideoThumbnails from 'expo-video-thumbnails';  // Import the expo-video-thumbnails module

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
  const { selectedSeedName } = route.params;
  console.log(selectedSeedName);

  const conso = () => {
    console.log('Notification pressed');
  };

  const selectedSeedImage = imageMapping[selectedSeedName];

  const [thumbnails, setThumbnails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [playlistIds, setPlaylistIds] = useState(['PLiUrrIiqidTVOFopSNaKy6ieGbmuhkxQw', /* ... other playlistIds */]);
  const [selectedSeedIndex, setSelectedSeedIndex] = useState(0);
  const apiKey = 'AIzaSyC0ncixno6iS_g7ilMKPTiZ4MtIGdp90ww';

  useEffect(() => {
    const getThumbnails = async () => {
      try {
        const allThumbnails = [];

        const currentPlaylistId = playlistIds[selectedSeedIndex];
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=2&playlistId=${currentPlaylistId}&key=${apiKey}`);
        const data = await response.json();

        if (data && data.items) {
          const videoIds = data.items.map(item => item.snippet.resourceId.videoId);

          for (const videoId of videoIds) {
            // Use expo-video-thumbnails to generate thumbnails
            const { uri } = await VideoThumbnails.getThumbnailAsync(`https://www.youtube.com/watch?v=${videoId}`);

            allThumbnails.push(uri);
          }
        } else {
          console.error('No items found in the response:', data);
        }

        setThumbnails(allThumbnails);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    getThumbnails();
  }, [playlistIds, selectedSeedIndex]);

  const goToNextSeed = () => {
    setSelectedSeedIndex(prevIndex => (prevIndex + 1) % playlistIds.length);
  };

  const goToPreviousSeed = () => {
    setSelectedSeedIndex(prevIndex => (prevIndex - 1 + playlistIds.length) % playlistIds.length);
  };

  return (
    <View>
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#9985FF" />
        </View>
      ) : (
        <View>
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
          <View horizontal style={styles.container3}>
            <TouchableOpacity onPress={goToPreviousSeed} style={styles.arrowButton}>
              <Image source={left} style={styles.arrowIcon} />
            </TouchableOpacity>

            {thumbnails.map((thumbnail, index) => (
              <TouchableOpacity key={index}>
                <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
              </TouchableOpacity>
            ))}

            <TouchableOpacity onPress={goToNextSeed} style={styles.arrowButton}>
              <Image source={right} style={styles.arrowIcon} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Resource;