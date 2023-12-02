import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity,TouchableWithoutFeedback, Keyboard, Linking, Image, TextInput, Button, StyleSheet, ScrollView, Flat } from 'react-native';
import { openDatabase } from 'expo-sqlite';
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
    const { username, password, profilePic, isEditing: routeIsEditing, editingEntry: routeEditingEntry } = route.params;
    const selectedSeedName = profilePic;
    const selectedSeedImage = imageMapping[selectedSeedName];
    const [heading, setHeading] = useState('');
    const [dateTime, setDateTime] = useState(new Date());
    const [thoughts, setThoughts] = useState('');
    const [isEditing, setIsEditing] = useState(routeIsEditing || false); 
    const [editingEntry, setEditingEntry] = useState(routeEditingEntry || null); 
    const [mood, setMood] = useState('');
    const [value, setValue] = useState(null); 
    const [open, setOpen] = useState(false);
    const [entries, setEntries] = useState([]);

    console.log("Entry+mood+1:", value);

    useEffect(() => {
        if (isEditing && editingEntry) {
            setHeading(editingEntry.heading);
            setDateTime(new Date());
    
            if (editingEntry.mood !== undefined && editingEntry.mood !== null) {
                setValue(editingEntry.mood);
                setMood(editingEntry.mood);
            } else {
                setValue(null);
                setMood(''); 
            }
    
            setThoughts(editingEntry.thoughts);
        } else {
            setHeading('');
            setDateTime(new Date());
            setMood(''); 
            setThoughts('');
            setValue(null);
        }
    
        fetchEntries();
    }, [isEditing, editingEntry]);

    const fetchEntries = () => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            'SELECT * FROM journal_entries',
            [],
            (_, { rows }) => {
              const entriesArray = rows._array;
              setEntries(entriesArray);
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
  
    const updateJournalEntry = () => {
        const formattedDateTime = `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}`;
      
        db.transaction(
          (tx) => {
            tx.executeSql(
              'UPDATE journal_entries SET heading=?, dateTime=?, mood=?, thoughts=? WHERE id=?',
              [heading, formattedDateTime, mood, thoughts, editingEntry.id],
              (tx, results) => {
                if (results.rowsAffected > 0) {
                  console.log('Journal Entry Updated Successfully');
                  fetchEntries();
                } else {
                  console.log('Failed to update Journal Entry');
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

    const dismissKeyboard = () => {
        Keyboard.dismiss();
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
      isEditing ? updateJournalEntry() : saveJournalEntry();
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

            <TextInput
                style={styles.input3}
                placeholder="Mood"
                value={mood}
                onChangeText={(text) => setMood(text)}
            />

            <TouchableWithoutFeedback onPress={dismissKeyboard} accessible={false}>
            <TextInput
                style={styles.input2}
                onChangeText={handleTextChange}
                placeholder="Thoughts"
                multiline={true}
                defaultValue={isEditing && editingEntry ? editingEntry.thoughts : ''}
            />
            </TouchableWithoutFeedback>
  
            <TouchableOpacity style={styles.nextButton} onPress={goToHome}>
                <Text style={styles.nextbuttonText}>{isEditing ? 'Update' : 'Save'}</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default Journal;