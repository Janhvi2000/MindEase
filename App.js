import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Test from './Components/Pages/testscreen';
import Start from './Components/Pages/startpage';
import Welcome from './Components/Pages/welcome';
import Home from './Components/Pages/home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;