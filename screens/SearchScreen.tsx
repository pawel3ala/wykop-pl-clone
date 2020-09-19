import React from 'react'
import { Text, View } from '../components/Themed';
import { Button } from 'react-native'
import { StyleSheet } from 'react-native'

export default  function SearchScreen ({ navigation }) {

    const { navigate } = navigation

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Szukaj</Text>
            <Button title="Znalezisko" onPress={() => navigate('ZnaleziskoScreen')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});