import { createStackNavigator } from '@react-navigation/stack';
import { TabZnaleziskaParamList } from '../types';
import { generateScreenOptions } from './utilities'
import Znaleziska from '../screens/Znaleziska'
import Znalezisko from '../screens/Znalezisko'
import SearchScreen from '../screens/SearchScreen'
import DodajZnaleziskoScreen from '../screens/DodajZnaleziskoScreen'
import * as React from 'react';

const ZnaleziskaStack = createStackNavigator<TabZnaleziskaParamList>();

export function ZnaleziskaStackNavigator() {

    return (
        <ZnaleziskaStack.Navigator
            screenOptions={(props) => generateScreenOptions(props)}
        >
            <ZnaleziskaStack.Screen
                name="ZnaleziskaHomeScreen"
                component={Znaleziska}
            />
            <ZnaleziskaStack.Screen
                name="ZnaleziskoScreen"
                component={Znalezisko}
            />
            <ZnaleziskaStack.Screen
                name="SearchScreen"
                component={SearchScreen}
            />
            <ZnaleziskaStack.Screen
                name="DodajZnaleziskoScreen"
                component={DodajZnaleziskoScreen}
            />
        </ZnaleziskaStack.Navigator>
    );
}