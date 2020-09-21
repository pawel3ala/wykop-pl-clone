import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MojWykopScreen from '../screens/MojWykopScreen'


const Tab = createMaterialTopTabNavigator();

export default function MojWykopTopTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="wszystko" component={MojWykopScreen} />
      <Tab.Screen name="tagi" component={MojWykopScreen} />
      <Tab.Screen name="użytkownicy" component={MojWykopScreen} />
      <Tab.Screen name="moje tagi" component={MojWykopScreen} />
    </Tab.Navigator>
  );
}