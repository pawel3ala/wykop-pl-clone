import React from 'react'
import { Text, View } from '../components/Themed';
import { Button } from 'react-native'


const SearchScreen = ({ navigation }) => {

    const { navigate } = navigation

    return (
        <View>
            <Text>Szukaj</Text>
            <Button title="Znalezisko" onPress={() => navigate('ZnaleziskoScreen')} />
        </View>
    )
}

export default SearchScreen
