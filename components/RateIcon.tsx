import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useThemeColor } from './Themed';

export default function AddToFavourites(props: object) {
  const color = useThemeColor(props, 'topNavIconColor');

  return <MaterialCommunityIcons name="plus-minus" size={24} color={color} {...props} />
}
