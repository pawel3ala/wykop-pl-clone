import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
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

export default function wykopStackNavigatorFactory (tabName: string, color: string) {

    const StackNavigator = createStackNavigator()
    const initialScreen = getInitialRouteNameFromTabName(tabName)
  
    return (
      <StackNavigator.Navigator
        initialRouteName={initialScreen}
        screenOptions={(props) => generateScreenOptions(props, color)}
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
  