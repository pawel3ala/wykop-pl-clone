import { Ionicons, Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import wykopStackNavigatorFactory from './wykopStackNavigatorFactory'
import * as React from 'react';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import {
  BottomTabParamList,
} from '../types';
import { useThemeColor } from '../components/Themed';

// SHOULD I USE ANONYMOUS FUNCTIONS HERE?
const ZnaleziskaStackNavigator = (props) => {
  const color = useThemeColor(props, 'topNavBackgroundColor');
  return wykopStackNavigatorFactory('ZNALEZISKA', color)
};
const WpisyStackNavigator = (props) => {
  const color = useThemeColor(props, 'topNavBackgroundColor');
  return wykopStackNavigatorFactory('WPISY', color)
};
const MojWykopStackNavigator = (props) => {
  const color = useThemeColor(props, 'topNavBackgroundColor');

  return wykopStackNavigatorFactory('MOJ_WYKOP', color)
}
const InboxStackNavigator = (props) => {
  const color = useThemeColor(props, 'topNavBackgroundColor');

  return wykopStackNavigatorFactory('INBOX', color)
}
const ProfilStackNavigator = (props) => {
  const color = useThemeColor(props, 'topNavBackgroundColor');

  return wykopStackNavigatorFactory('PROFIL', color)
}

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        activeBackgroundColor: Colors[colorScheme].bottomNavBackgroundColor,
        inactiveBackgroundColor: Colors[colorScheme].bottomNavBackgroundColor
      }}>
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