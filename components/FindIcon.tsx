import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useThemeColor } from './Themed';


export default function FindIcon() {
    const { navigate } = useNavigation();
    const color = useThemeColor({}, 'topNavIconColor');
    return <Entypo name="magnifying-glass" size={24} color={color} onPress={() => navigate('SearchScreen')} />
}
