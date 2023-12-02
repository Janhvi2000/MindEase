import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity,TouchableWithoutFeedback, Keyboard, Linking, Image, TextInput, Button, StyleSheet, ScrollView, Flat } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { openDatabase } from 'expo-sqlite';
import styles from '../Styles/styles';
import bell from '../Pictures/bell.png';
import about from '../Pictures/about.png';
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

const db = openDatabase('user.db');

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

const Journal = ({ navigation, route }) => {
    const { username, password, profilePic } = route.params;
    const selectedSeedName = profilePic;
    const selectedSeedImage = imageMapping[selectedSeedName];
    const [heading, setHeading] = useState('');
    const [dateTime, setDateTime] = useState(new Date());
    const [mood, setMood] = useState('');
    const [thoughts, setThoughts] = useState('');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      { label: 'Happy', value: 'Happy' },
      { label: 'Sad', value: 'Sad' },
      { label: 'Excited', value: 'Excited' },
      { label: 'Angry', value: 'Angry' },
      { label: 'Other', value: 'Other' },
    ]);
    const [entries, setEntries] = useState([]);
  
    useEffect(() => {
      fetchEntries();
      setDateTime(new Date());
    }, []);
  
    const fetchEntries = () => {
        db.transaction(
          (tx) => {
            tx.executeSql(
              'SELECT * FROM journal_entries',
              [],
              (_, { rows }) => {
                const entriesArray = rows._array; 
                setEntries(entriesArray);
                console.log('All Entries:', entriesArray);
              },
              (error) => {
                console.error(error);
              }
            );
          },
          (error) => {
            console.error(error);
          },
          () => {}
        );
      };
  
    const saveJournalEntry = () => {
      const formattedDateTime = `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })}`;
  
      db.transaction(
        (tx) => {
          tx.executeSql(
            'CREATE TABLE IF NOT EXISTS journal_entries (id INTEGER PRIMARY KEY AUTOINCREMENT, heading TEXT, dateTime TEXT, mood TEXT, thoughts TEXT, username TEXT)'
          );
  
          tx.executeSql(
            'INSERT INTO journal_entries (heading, dateTime, mood, thoughts, username) VALUES (?, ?, ?, ?, ?)',
            [heading, formattedDateTime, mood, thoughts, username],
            (tx, results) => {
              if (results.rowsAffected > 0) {
                console.log('Journal Entry Saved Successfully');
                fetchEntries(); 
              } else {
                console.log('Failed to save Journal Entry');
              }
            },
            (error) => {
              console.error(error);
            }
          );
        },
        (error) => {
          console.error(error);
        },
        () => {}
      );
    };
  
    const handleTextChange = (inputText) => {
      setThoughts(inputText);
    };
  
    const conso = () => {
      console.log('Notification pressed');
    };
  
    const goToProfile = () => {
      navigation.navigate('Profile', {
        username: route.params.username,
        password: route.params.password,
        profilePic: selectedSeedName,
      });
    };
  
    const goToHome = () => {
      saveJournalEntry();
      navigation.navigate('Home', {
        username: route.params.username,
        password: route.params.password,
        profilePic: selectedSeedName,
      });
    };
  
    return (
      <View style={styles.container2}>
        <View style={{ backgroundColor: '#ffffff', paddingHorizontal: 15, marginBottom: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}></View>
            <TouchableOpacity style={styles.notif} onPress={conso}>
              <Image source={bell} style={styles.bell} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileImageContainerSmall} onPress={goToProfile}>
              <Image source={selectedSeedImage} style={styles.profileImage} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container8}>
          <TextInput
            style={styles.input3}
            placeholder="Heading"
            value={heading}
            onChangeText={(text) => setHeading(text)}
          />
  
          <Text style={styles.input3}>
            {dateTime.toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            }).replace(',', '')}{' '}
          </Text>
  
          <Text style={styles.input3}>
            {dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
          </Text>
  
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            style={styles.input3}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            dropDownContainerStyle={styles.dropDownContainer}
          />
  
          {value === 'Other' && (
            <TextInput
              style={[styles.input3, { marginTop: open ? 50 : 0 }]}
              placeholder="Enter your own mood"
              value={mood}
              onChangeText={(text) => setMood(text)}
            />
          )}
  
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <TextInput
              style={[styles.input2, { marginTop: open ? 120 : 0 }, { height: open ? '20%' : '40%' }]}
              onChangeText={handleTextChange}
              placeholder="Thoughts"
              multiline={true}
              numberOfLines={4}
              onSubmitEditing={Keyboard.dismiss}
            />
          </TouchableWithoutFeedback>
  
          <TouchableOpacity style={styles.nextButton} onPress={goToHome}>
            <Text style={styles.nextbuttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default Journal;