import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Znaleziska from '../screens/Znaleziska'


const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="najnowsze" component={Znaleziska} />
      <Tab.Screen name="aktywne" component={Znaleziska} />
    </Tab.Navigator>
  );
}