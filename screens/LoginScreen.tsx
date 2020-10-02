import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../types';
import * as WebBrowser from 'expo-web-browser';
import { Button } from 'react-native';
import * as Google from 'expo-google-app-auth'
import { AsyncStorage } from 'react-native';
import { Animated, Easing } from 'react-native';
import Constants from 'expo-constants';
import { setUser } from '../store/reducers/currentUserReducer'
import { useDispatch } from 'react-redux'

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen({
    navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {

    const dispatch = useDispatch()
    const spinValue = new Animated.Value(0)

    Animated.loop(
        Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration: 5000,
                easing: Easing.linear,
                useNativeDriver: true 
            }
        )
    ).start()

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    const handleGoogleLogin = async () => {
        try {
            const { type, accessToken, user } = await Google.logInAsync({
                iosClientId: Constants.manifest.iosClientId,
                scopes: ['profile', 'email']
            })
            if (type === 'success') {
                dispatch(setUser({...user, ...{accessToken}}))
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
            <TouchableOpacity onPress={handleGoogleLogin} style={styles.link}>
                <Animated.Image
                    style={{ transform: [{ rotate: spin }], height: 50, width: 200, resizeMode: 'stretch' }}
                    source={{ uri: "https://developers.google.com/identity/images/btn_google_signin_light_normal_web.png" }} />
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
    }
});
