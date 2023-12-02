import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Test from './Components/Pages/testscreen';
import Start from './Components/Pages/startpage';
import Welcome from './Components/Pages/welcome';
import Home from './Components/Pages/home';
import Feedback from './Components/Pages/feedback';
import Signup from './Components/Pages/signup';
import Login from './Components/Pages/login';
import Crisis from './Components/Pages/crisissupport';
import Profile from './Components/Pages/profile';
import Resource from './Components/Pages/resourcelibrary';
import About from './Components/Pages/about';
import ChatBot from './Components/Pages/chatbot';
import Progress from './Components/Pages/progress';
import Entries from './Components/Pages/entries';

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
          name="About"
          component={About}
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
        <Stack.Screen
          name="Crisis"
          component={Crisis}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
        />
        <Stack.Screen
          name="Resource"
          component={Resource}
        />
        <Stack.Screen
          name="ChatBot"
          component={ChatBot}
        />
        <Stack.Screen
          name="Progress"
          component={Progress}
        />
        <Stack.Screen
          name="Entries"
          component={Entries}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
