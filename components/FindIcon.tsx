import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function FindIcon(props: object) {
    const { navigate } = useNavigation();

    return <Entypo
        name="magnifying-glass"
        size={24}
        color="black"
        {...props}
        onPress={() => navigate('SearchScreen')}
    />
}
