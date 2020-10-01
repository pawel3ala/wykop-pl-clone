import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../types';
import * as WebBrowser from 'expo-web-browser';
import { Button } from 'react-native';
import * as Google from 'expo-google-app-auth'

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen({
    navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {

    const handleGoogleLogin = async () => {
        try {
            const { type, accessToken, user } = await Google.logInAsync({
                iosClientId: '767485748040-v9o2higdcg652bsg0a3n7ppo8ip64odn.apps.googleusercontent.com',
                scopes: ['profile', 'email']
            })
            if (type === 'success') {
                //   await AsyncStorage.setItem('LOGGED_IN_USER', JSON.stringify(user))
                navigation.navigate('Root')
            } else {
                alert("not authenticated")
            }
        } catch (err) {
            alert('errrrrrrrr' + JSON.stringify(err))
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>This is login screen</Text>
            <TouchableOpacity onPress={handleGoogleLogin} style={styles.link}>
                <Text style={styles.linkText}>Logowanko via Google OAuth</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    linkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
