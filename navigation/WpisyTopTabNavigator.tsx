import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Wpisy from '../screens/Wpisy'


const Tab = createMaterialTopTabNavigator();

export default function WpisyTopTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="6h" component={Wpisy} />
      <Tab.Screen name="12h" component={Wpisy} />
      <Tab.Screen name="24h" component={Wpisy} />
    </Tab.Navigator>
  );
}