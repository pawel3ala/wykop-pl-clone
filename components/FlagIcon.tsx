import React from 'react'
import { Feather } from '@expo/vector-icons';
import { useThemeColor } from './Themed';

export default function AddToFavourites(props: object) {
  const color = useThemeColor(props, 'topNavIconColor');

  return <Feather name="flag" size={24} color={color} {...props} />
}
