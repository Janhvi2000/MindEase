import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Test from './Components/Pages/testscreen';
import Start from './Components/Pages/startpage';
import Welcome from './Components/Pages/welcome';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: { backgroundColor: '#9985FF' },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen
          name="Test"
          component={Test}
          options={{ title: 'Test Screen' }}
        />
        <Stack.Screen
          name="Start Page"
          component={Start}
          options={{ title: 'Start Screen' }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ title: 'Welcome Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;