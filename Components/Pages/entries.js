import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity,TouchableWithoutFeedback, Keyboard, Linking, FlatList, Image, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { init, openDatabase } from 'expo-sqlite';
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
import edit from '../Pictures/edit.png';
import del from '../Pictures/delete.png';

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

const Journal1 = ({ navigation, route }) => {
  const { username, password, profilePic } = route.params;
  const selectedSeedName = profilePic;
  const selectedSeedImage = imageMapping[selectedSeedName];

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchEntries();
  }, []);

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

  const fetchEntries = () => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'SELECT * FROM journal_entries WHERE username = ?',
          [username],
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

  const goToHome = () => {
    navigation.navigate('Home', {
      username: route.params.username,
      password: route.params.password,
      profilePic: selectedSeedName,
    });
  };

  const handleEdit = (entry) => {
    console.log("Entry from progress: ",entry);
    navigation.navigate('Progress', {
      username: route.params.username,
      password: route.params.password,
      profilePic: selectedSeedName,
      editingEntry: entry, 
      isEditing: true,
    });
  };
  
  const handleDelete = (entry) => {
    console.log('Deleting entry:', entry);
  
    db.transaction(
      (tx) => {
        tx.executeSql(
          'DELETE FROM journal_entries WHERE id = ?',
          [entry.id],
          (_, results) => {
            if (results.rowsAffected > 0) {
              console.log('Entry deleted successfully');
              fetchEntries(); 
            } else {
              console.log('Failed to delete entry');
            }
          },
          (error) => {
            console.error(error);
          }
        );
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const EntryCard = ({ entry }) => {
    return (
      <View style={styles.card}>
      <Text style={styles.heading}>{entry.heading}</Text>
      <Text style={styles.dateTime}>{entry.dateTime}</Text>
      <Text style={styles.mood}>Mood: {entry.mood}</Text>
      <Text style={styles.thoughts}>Thoughts: {entry.thoughts}</Text>

      <View style={styles.cardButtonsContainer}>
        <TouchableOpacity style={styles.editButton} onPress={() => handleEdit(entry)}>
          <Image source={edit} style={styles.editIcon} />
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => handleDelete(entry)}>
          <Image source={del} style={styles.editIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const renderEntryItem = ({ item }) => (
  <EntryCard entry={item} onDelete={handleDelete} onEdit={handleEdit} />
);

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
        <View style = {styles.bottomContainer2}>
        <FlatList
          data={entries}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderEntryItem}
          style={{marginTop: 20}}
        />
        </View>
         <View style = {styles.bottomContainer3}>
          <TouchableOpacity style={styles.nextButton} onPress={goToHome}>
            <Text style={styles.nextbuttonText}>Home</Text>
          </TouchableOpacity>
          </View>
      </View>
    </View>
  );
};

export default Journal1;