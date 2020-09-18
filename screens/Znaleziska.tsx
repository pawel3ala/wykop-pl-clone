import React from 'react'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Text, View } from '../components/Themed';

const Znaleziska = (props) => {
    const { navigate } = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ZNALEZISKA</Text>
            <Text onPress={()=> navigate('ZnaleziskoScreen')}>Przykladowe znalezisko</Text>
        </View>
    )
}

export default Znaleziska

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

