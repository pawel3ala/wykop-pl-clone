import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute, useTheme } from '@react-navigation/native';
import { useThemeColor } from './Themed';

export default function Addcon() {
    const color = useThemeColor({}, 'topNavIconColor');
    const { navigate } = useNavigation();
    const { name } = useRoute();

    function handleAddButton() {
        if (name === 'ZnaleziskaHomeScreen') {
            navigate('DodajZnaleziskoScreen')
        }
    }

    return <Entypo name="plus" size={24} color={color} onPress={handleAddButton}
    />
}