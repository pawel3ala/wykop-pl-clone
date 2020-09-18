import React from 'react'
import { Button, Linking } from 'react-native'
import { Text, View } from '../components/Themed';

const Znalezisko = (props) => {

const handleButtonPress = (props) => {
    // WebBrowser.openBrowserAsync('https://expo.io');
    Linking.openURL('https://google.com');
}

    return (
        <View>
            <Text>To jest znalezisko</Text>
            <Button
          title="Open URL with Expo.WebBrowser"
          onPress={handleButtonPress}
        />
        </View>
    )
}

export default Znalezisko