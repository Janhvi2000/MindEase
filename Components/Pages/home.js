import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../Styles/styles';
import home from '../Pictures/home.png';
import bell from '../Pictures/bell.png';

const Home = ({ navigation, route }) => {
  const [svgImage, setSvgImage] = useState(null);
  const [seed, setSeed] = useState(route.params?.seed || 'princess');



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

    if (seed) {
      fetchSvg(seed);
    }
  }, [seed]);

  const conso = () => {
    console.log('Hi');
  };

  return (
    <View style={{ backgroundColor: '#ffffff', paddingHorizontal: 15 }}>
      <View style={{ flexDirection: 'row'}}>
      <View style={{ flex: 1 }}></View>
      <TouchableOpacity style={styles.notif} onPress={conso}>
          <Image source={bell} style={styles.bell} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileImageContainerSmall} onPress={() => navigation.navigate('Profile')}>
          {svgImage && <Image source={{ uri: `data:image/svg+xml,${encodeURIComponent(svgImage)}` }} style={styles.profileImage} />}
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.bottomContainer}>
          <Image source={home} style={styles.image} />
          <TouchableOpacity style={styles.secondButton}>
            <Text style={styles.secondbuttonText} onPress={() => navigation.navigate('Crisis')}>Crisis Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondButton}>
            <Text style={styles.secondbuttonText} onPress={() => navigation.navigate('Profile')}>Personal Progress</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondButton}>
            <Text style={styles.secondbuttonText}>Resource Library</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondButton}>
            <Text style={styles.secondbuttonText} onPress={() => navigation.navigate('Feedback')}>Feedback</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
