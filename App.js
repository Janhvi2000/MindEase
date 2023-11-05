import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Test from './Components/Pages/testscreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Test"
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;