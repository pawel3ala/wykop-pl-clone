import React from 'react'
import { Text, View } from '../components/Themed';
import { StyleSheet } from 'react-native'

export default function DodajZnalezisko () {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>DODAJ ZNALEZISKO</Text>
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