import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Addcon(props: object) {
    const { navigate } = useNavigation();
    const { name } = useRoute();

    function handleAddButton() {
        if (name === 'ZnaleziskaHomeScreen') {
            navigate('DodajZnaleziskoScreen')
        }
    }

    return <Entypo
        name="plus"
        size={24}
        color="black"
        {...props}
        onPress={handleAddButton}
    />
}