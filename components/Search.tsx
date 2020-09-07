import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native'


const Search = ({navigation}) => {

    const {navigate} = navigation

    return (
        <View>
            <Text>Szukaj</Text>
            <Button  title="Znalezisko" onPress={() => navigate('ZnaleziskoScreen')} />
        </View>
    )
}

export default Search
