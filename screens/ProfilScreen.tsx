import React from 'react'
import { Text, View } from '../components/Themed';
import { StyleSheet } from 'react-native'
import * as Google from 'expo-google-app-auth'
import { AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';
import Constants from 'expo-constants';

export default function ProfilScreen() {

    const navigation = useNavigation();
    const config = {
        iosClientId: Constants.manifest.iosClientId,
    }

    const handleLogOut = async () => {
        const accessToken = await AsyncStorage.getItem('ACCESS_TOKEN');
        await Google.logOutAsync({ accessToken, ...config })
        navigation.navigate("Login")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ProfilScreen</Text>
            <Button onPress={handleLogOut} title='Exit' />
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
