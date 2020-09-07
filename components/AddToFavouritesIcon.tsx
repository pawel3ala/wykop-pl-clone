import React from 'react'
import { Entypo } from '@expo/vector-icons';


export default function AddToFavourites(props) {
  return <Entypo
    name="star"
    size={24}
    color="black"
    {...props}
  />
}
