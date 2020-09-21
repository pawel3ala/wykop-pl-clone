import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import InboxScreen from '../screens/InboxScreen'


const Tab = createMaterialTopTabNavigator();

export default function InboxTopTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="wiadomości" component={InboxScreen} />
      <Tab.Screen name="do mnie" component={InboxScreen} />
      <Tab.Screen name="tagi" component={InboxScreen} />
    </Tab.Navigator>
  );
} 