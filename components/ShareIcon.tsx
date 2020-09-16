import React from 'react'
import { View, Text } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';

export default function ShareIcon(props: object) {
    return <EvilIcons name="share-apple" size={24} color="black" {...props}/>
}
