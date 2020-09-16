import { Ionicons, Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import wykopStackNavigatorFactory from './wykopStackNavigatorFactory'
import * as React from 'react';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import {
  BottomTabParamList,
} from '../types';

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