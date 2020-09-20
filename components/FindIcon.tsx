import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useThemeColor } from './Themed';


export default function FindIcon(props: object) {
    const { navigate } = useNavigation();
    const color = useThemeColor(props, 'topNavIconColor');

    return <Entypo name="magnifying-glass" size={24} color={color} {...props} onPress={() => navigate('SearchScreen')} />
}
