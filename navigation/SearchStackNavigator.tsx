import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {
    SearchStackParamList
} from '../types';

import Search from '../components/Search'
import { Button } from 'react-native'
import NotFoundScreen from '../screens/NotFoundScreen';


const SearchStackNavigator = createStackNavigator<SearchStackParamList>();

function SearchNavigator() {
    return (
        <SearchStackNavigator.Navigator screenOptions={{
            headerShown: false,
        }}>
            <SearchStackNavigator.Screen name="Search" component={Search} />
            <SearchStackNavigator.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        </SearchStackNavigator.Navigator>
    );
}

export default SearchNavigator;
