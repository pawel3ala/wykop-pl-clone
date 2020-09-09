import { Ionicons, Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import {
  BottomTabParamList,
} from '../types';

import { generateScreenOptions } from './utilities'
import Znaleziska from '../screens/Znaleziska'
import Znalezisko from '../screens/Znalezisko'
import SearchScreen from '../screens/SearchScreen'
import Wpisy from '../screens/Wpisy'
import DodajZnaleziskoScreen from '../screens/DodajZnaleziskoScreen'
import InboxScreen from '../screens/InboxScreen'
import MojWykopScreen from '../screens/MojWykopScreen'
import ProfilScreen from '../screens/ProfilScreen'

const getInitialRouteNameFromTabName = (tabName: string) => {

  switch (tabName) {
    case 'ZNALEZISKA':
      return "ZnaleziskaHomeScreen"
    case 'WPISY':
      return "WpisyScreen"
    case 'MOJ_WYKOP':
      return "MojWykopScreen"
    case 'INBOX':
      return "InboxScreen"
    case 'PROFIL':
      return "ProfilScreen"
  }
}
const wykopStackNavigatorFactory = (tabName: string) => {

  const StackNavigator = createStackNavigator()
  const initialScreen = getInitialRouteNameFromTabName(tabName)

  return (
    <StackNavigator.Navigator
      initialRouteName={initialScreen}
      screenOptions={(props) => generateScreenOptions(props)}
    >
      <StackNavigator.Screen
        name="ZnaleziskaHomeScreen"
        component={Znaleziska}
      />
      <StackNavigator.Screen
        name="WpisyScreen"
        component={Wpisy}
      />
      <StackNavigator.Screen
        name="ZnaleziskoScreen"
        component={Znalezisko}
      />
      <StackNavigator.Screen
        name="SearchScreen"
        component={SearchScreen}
      />
      <StackNavigator.Screen
        name="DodajZnaleziskoScreen"
        component={DodajZnaleziskoScreen}
      />
      <StackNavigator.Screen
        name="InboxScreen"
        component={InboxScreen}
      />
      <StackNavigator.Screen
        name="MojWykopScreen"
        component={MojWykopScreen}
      />
      <StackNavigator.Screen
        name="ProfilScreen"
        component={ProfilScreen}
      />
    </StackNavigator.Navigator>
  );
}

// SHOULD I USE ANONYMOUS FUNCTIONS HERE?
const ZnaleziskaStackNavigator = () => wykopStackNavigatorFactory('ZNALEZISKA');
const WpisyStackNavigator = () => wykopStackNavigatorFactory('WPISY');
const MojWykopStackNavigator = () => wykopStackNavigatorFactory('MOJ_WYKOP');
const InboxStackNavigator = () => wykopStackNavigatorFactory('INBOX');
const ProfilStackNavigator = () => wykopStackNavigatorFactory('PROFIL');

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Znaleziska"
        component={ZnaleziskaStackNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Wpisy"
        component={WpisyStackNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="MojWykop"
        component={MojWykopStackNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Inbox"
        component={InboxStackNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profil"
        component={ProfilStackNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}