import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, Button, Text, KeyboardAvoidingView, Platform, StyleSheet, FlatList, Image } from 'react-native';
import axios from 'axios';
import styles from '../Styles/styles';
import bot from '../Pictures/bot.png'; 
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

const MessageBubble = ({ type, text, imageSource }) => (
  <View style={type === 'user' ? styles.userMessageContainer : styles.botMessageContainer}>
    <View style={styles.iconContainer}>
      <Image source={imageSource} style={styles.icon1} />
    </View>
    <View style={type === 'user' ? styles.userMessage : styles.botMessage}>
      <Text style={{ color: type === 'user' ? '#ffffff' : 'black' }}>{text}</Text>
    </View>
  </View>
);

const App = ({ navigation, route }) => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [lastSentMessage, setLastSentMessage] = useState('');
    const flatlistRef = useRef(null);
    const { username, password, profilePic } = route.params;
    const selectedSeedName = profilePic;
    const selectedSeedImage = imageMapping[selectedSeedName];
  
    useEffect(() => {
      // Set initial welcome message
      setMessages([{ text: 'Welcome! I am ChatBot! How can I assist you today?', type: 'bot' }]);
    }, []);
  
    const handleSend = async () => {
      if (input.trim() === lastSentMessage.trim()) {
        console.log('Same message, request not sent');
        setInput('');
        return;
      }
  
      try {
        const result = await axios.post("http://192.168.1.214:5000/dialogflow", {
          session_id: '1',
          text: input,
        });
  
        const newMessage = { text: input, type: 'user' };
        setMessages(prevMessages => [...prevMessages, newMessage]);
        setLastSentMessage(input.trim());
  
        const botMessage = { text: result.data.fulfillment_text, type: 'bot' };
        setMessages(prevMessages => [...prevMessages, botMessage]);
  
        setInput('');
  
        flatlistRef.current.scrollToEnd({ animated: true });
      } catch (error) {
        setMessages(prevMessages => [...prevMessages, { text: 'Can you please repeat again?', type: 'bot' }]);
      }
    };
  
    return (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container7}
        >
          <FlatList
            ref={flatlistRef}
            data={messages}
            renderItem={({ item, index }) => (
              <View style={item.type === 'user' ? styles.userMessageContainer : styles.botMessageContainer}>
                {item.type === 'user' ? (
                  <>
                    <View style={styles.userMessage}>
                      <Text style={{ color: '#ffffff' }}>{item.text}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                      <Image source={selectedSeedImage} style={styles.icon1} />
                    </View>
                  </>
                ) : (
                  <>
                    <View style={styles.iconContainer}>
                        <Image source={bot} style={styles.icon1} />
                    </View>
                    <View style={styles.botMessage}>
                      <Text style={{ color: 'black' }}>{item.text}</Text>
                    </View>
                  </>
                )}
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            style={styles.chatContainer}
            contentContainerStyle={styles.chatContentContainer}
            onContentSizeChange={() => flatlistRef.current.scrollToEnd({ animated: true })}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input1}
              placeholder="Type your message here..."
              value={input}
              onChangeText={setInput}
            />
            <Button title="Send" onPress={handleSend} />
          </View>
        </KeyboardAvoidingView>
      );
    };
    
    export default App;