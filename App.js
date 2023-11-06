import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Test from './Components/Pages/testscreen';
import Start from './Components/Pages/startpage';
import Welcome from './Components/Pages/welcome';
import Home from './Components/Pages/home';
import Feedback from './Components/Pages/feedback';
import Signup from './Components/Pages/signup';
import Login from './Components/Pages/login';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start Page"
        screenOptions={{
          headerStyle: { backgroundColor: '#9985FF' },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen
          name="Test"
          component={Test}
        />
        <Stack.Screen
          name="Start Page"
          component={Start}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Feedback"
          component={Feedback}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;