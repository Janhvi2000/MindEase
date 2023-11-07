import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';
import crisis from '../Pictures/crisis.png';
import call from '../Pictures/call.png';
import text from '../Pictures/text.png';
import chat from '../Pictures/chat.png';

import styles from '../Styles/styles';

const Crisis = ({ navigation }) => {
  const phoneNumber = '1234567890';

  const openDialer = () => {
    const url = `tel:${phoneNumber}`;
    Linking.openURL(url)
      .catch(err => console.error('An error occurred', err));
  };

  const openMessagesApp = () => {
    Linking.openURL(`sms:${phoneNumber}`);
  };

  return (
    <View style={styles.container}>
        <Image source={crisis} style={styles.image} />

        <TouchableOpacity style={styles.buttonItem} onPress={openDialer}>
        <View style={styles.iconTextContainer}>
            <Image source={call} style={styles.img} />
            <Text style={styles.secondbuttonText1}>Call</Text>
        </View>
        </TouchableOpacity>


        <TouchableOpacity style={styles.buttonItem} onPress={openMessagesApp}>
        <View style={styles.iconTextContainer}>
            <Image source={text} style={styles.img} />
            <Text style={styles.secondbuttonText1}>Text</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonItem} onPress={openMessagesApp}>
        <View style={styles.iconTextContainer}>
            <Image source={chat} style={styles.img} />
            <Text style={styles.secondbuttonText1}>Chat</Text>
        </View>
        </TouchableOpacity>


    </View>
  );
};

export default Crisis;
