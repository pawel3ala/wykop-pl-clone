import React from 'react'
import { Text } from 'react-native'
import { useRoute } from '@react-navigation/native';

export default function HeaderTitle() {
    const route = useRoute();
    return <Text>RouteName: {route.name}</Text>
}