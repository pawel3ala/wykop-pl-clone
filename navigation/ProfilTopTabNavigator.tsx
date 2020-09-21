import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfilScreen from '../screens/ProfilScreen'

const Tab = createMaterialTopTabNavigator();

export default function ProfilTopTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ZNALEZISKA" component={ProfilScreen} />
      <Tab.Screen name="MIKROBLOG" component={ProfilScreen} />
      <Tab.Screen name="SPOLECZNOŚĆ" component={ProfilScreen} />
    </Tab.Navigator>
  );
} 