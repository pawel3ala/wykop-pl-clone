import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { useThemeColor } from './Themed';

export default function ShareIcon(props: object) {
    const color = useThemeColor(props, 'topNavIconColor');

    return <EvilIcons name="share-apple" size={24} color={color} {...props}/>
}
