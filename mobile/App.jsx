import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './screens/HomeScreen';
import RulesScreen from './screens/Rules/RulesScreen';

// import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
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
        component={HomeScreen}
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

const Tab = createBottomTabNavigator();

function App() {
  // const [userSession, setUserSession] = useState(
  //   AsyncStorage.getItem('user_ref_lpMds')
  //     ? AsyncStorage.getItem('user_ref_lpMds')
  //     : null,
  // );

  // const setUser = async (token, userId, username) => {
  //   if (token && userId) {
  //     AsyncStorage.setItem(
  //       'user_ref_lpMds',
  //       JSON.stringify({token, id: userId, username}),
  //     );

  //     setUserSession({token: token, id: userId, username});
  //   } else {
  //     AsyncStorage.removeItem('user_ref_lpMds');
  //     setUserSession(null);
  //   }
  // };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {backgroundColor: '#282c34'},
          tabBarActiveTintColor: '#991B1B',
        }}>
        <Tab.Screen
          name="Accueil"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({color}) => (
              <FontAwesomeIcon name={'home'} size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Règles"
          component={RulesStackScreen}
          options={{
            tabBarIcon: ({color}) => (
              <FontAwesomeIcon name={'moon-o'} size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
