import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { useThemeColor } from './Themed';

export default function AddToFavourites(props: object) {
  const color = useThemeColor(props, 'topNavIconColor');
  return <Entypo name="star" size={24} color={color} {...props} />
}