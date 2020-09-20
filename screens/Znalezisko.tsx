import React from 'react'
import { Button, Linking, StyleSheet } from 'react-native'
import { Text, View } from '../components/Themed';

const Znalezisko = (props: object) => {

const handleButtonPress = (props: object) => {
    // WebBrowser.openBrowserAsync('https://expo.io');
    Linking.openURL('https://google.com');
}

    return (
        <View style={styles.container}>
            <Text style={styles.title}>To jest znalezisko</Text>
            <Button
          title="Open URL with Expo.WebBrowser"
          onPress={handleButtonPress}
        />
        </View>
    )
}

export default Znalezisko

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