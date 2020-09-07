import { Ionicons, Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabTwoScreen from '../screens/TabTwoScreen';
import {
  BottomTabParamList,
  TabWpisyTabParamList,
  TabMojWykopParamList,
  TabInboxParamList,
  TabProfilParamList
} from '../types';

import { ZnaleziskaStackNavigator } from './ZnaleziskaStackNavigator'

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Znaleziska"
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
        component={WpisyNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="MojWykop"
        component={MojWykopNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Inbox"
        component={InboxNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profil"
        component={ProfilNavigator}
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

const WpisyStack = createStackNavigator<TabWpisyTabParamList>();

function WpisyNavigator() {
  return (
    <WpisyStack.Navigator>
      <WpisyStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </WpisyStack.Navigator>
  );
}

const MojWykopStack = createStackNavigator<TabMojWykopParamList>();

function MojWykopNavigator() {
  return (
    <MojWykopStack.Navigator>
      <MojWykopStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </MojWykopStack.Navigator>
  );
}

const InboxStack = createStackNavigator<TabInboxParamList>();

function InboxNavigator() {
  return (
    <InboxStack.Navigator>
      <InboxStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </InboxStack.Navigator>
  );
}

const ProfilStack = createStackNavigator<TabProfilParamList>();

function ProfilNavigator() {
  return (
    <ProfilStack.Navigator>
      <ProfilStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </ProfilStack.Navigator>
  );
}