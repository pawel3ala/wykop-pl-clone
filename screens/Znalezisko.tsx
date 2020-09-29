import React from 'react'
import { Button, Linking, StyleSheet } from 'react-native'
import { Text, View } from '../components/Themed';
import ZnaleziskoTopTabNavigator from '../navigation/ZnaleziskoTopTabNavigator'

const Znalezisko = ({ route }) => {

    const {
        comments_count,
        related_count,
        tags,
        vote_count,
        bury_count
    } = route.params

    const handleButtonPress = (props: object) => {
        // WebBrowser.openBrowserAsync('https://expo.io');
        Linking.openURL('https://google.com');
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>To jest znalezisko</Text>
                <Button
                    title="Open URL with Expo.WebBrowser"
                    onPress={handleButtonPress}
                />
            </View>
            <View style={{ flex: 1 }}>
                <ZnaleziskoTopTabNavigator comments_count={comments_count} related_count={related_count} vote_count={vote_count} bury_count={bury_count} tags={tags}/>
            </View>
        </>
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