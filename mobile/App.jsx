import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import RulesScreen from './screens/Rules/RulesScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  const [userSession, setUserSession] = useState(
    AsyncStorage.getItem('user_ref_lpMds')
      ? JSON.parse(AsyncStorage.getItem('user_ref_lpMds'))
      : null,
  );

  const setUser = async (token, userId, username) => {
    if (token && userId) {
      AsyncStorage.setItem(
        'user_ref_lpMds',
        JSON.stringify({token, id: userId, username}),
        {
          expires: 1,
        },
      );

      setUserSession({token, id: userId, username});
    } else {
      AsyncStorage.removeItem('user_ref_lpMds');
      setUserSession(null);
    }
  };
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{
          headerStyle: {
            backgroundColor: '#282c34',
          },
          headerTintColor: '#fff',
        }}
        name="Home"
        component={() => <HomeScreen />}
      />
    </HomeStack.Navigator>
  );
}

const RulesStack = createNativeStackNavigator();

function RulesStackScreen() {
  return (
    <RulesStack.Navigator>
      <RulesStack.Screen
        options={{
          headerStyle: {
            backgroundColor: '#282c34',
          },
          headerTintColor: '#fff',
        }}
        name="Comment jouer"
        component={RulesScreen}
      />
    </RulesStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {backgroundColor: '#282c34'},
          tabBarActiveTintColor: '#fff',
        }}>
        <Tab.Screen name="Accueil" component={HomeStackScreen} />
        <Tab.Screen name="Règles" component={RulesStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
