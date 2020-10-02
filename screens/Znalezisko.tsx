import React from 'react'
import { useState, useEffect } from 'react';
import { Button, Linking, StyleSheet, Image, ScrollView, TouchableWithoutFeedback } from 'react-native'
import { Text, View } from '../components/Themed';
import ZnaleziskoTopTabNavigator from '../navigation/ZnaleziskoTopTabNavigator'
import { useDispatch, useStore } from 'react-redux'
import { addFavouriteLink } from '../store/reducers/usersReducer'
import { store } from '../store/configureStore';
import { removeFavouriteLink } from '../store/reducers/usersReducer'

interface IZnaleziskoDetailed {
    id: number,
    title: string,
    preview: string,
    comments_count: number,
    source_url: string,
    vote_count: number,
    related_count: number,
    bury_count: number,
    tags: string
}

const Znalezisko = ({ route }) => {

    const { id = 666 } = route.params
    const description = "Iran otrzymał złoto z Wenezueli w zamian za ładunki paliwa, które Teheran wysłał do tego pogrążonego w kryzysie kraju - poinformował w weekend Yahya Safavi główny dowódca Korpusu Strażników Rewolucji Islamskiej. Kruszec transportowany był do Iranu samolotami aby &quot;zapobiec wypadkowi podczas tranzytu&quot;"
    const [znalezisko, setZnalezisko] = useState<IZnaleziskoDetailed | null>(null)
    const dispatch = useDispatch()
    const store = useStore()

    const fetchData = () => {
        setZnalezisko({
            id: id,
            title: "Title to be here at some point",
            preview: "https://www.wykop.pl/cdn/c3397993/link_1601451183FM4IqsyGd4qS4WLq5WORXZ,w104h74.jpg",
            comments_count: 666,
            source_url: "https://google.com",
            vote_count: 222,
            related_count: 3,
            bury_count: 33,
            tags: "#polska"
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleLinkPress = () => {
        // WebBrowser.openBrowserAsync(znalezisko!.source_url);
        Linking.openURL(znalezisko!.source_url);
    }

    if (!znalezisko) return null
    return (
        <>
            {/* TODO: Set scrollview! */}
            {/* <ScrollView> */}
            <TouchableWithoutFeedback onPress={handleLinkPress}>
                <View style={styles.container}>
                    <Image style={{ height: '60%', width: '100%', resizeMode: 'stretch' }} source={{ uri: znalezisko.preview }} />
                    <View style={{ flexDirection: 'row' }}>
                        <Text>{znalezisko.vote_count}</Text>
                        <Text style={styles.title}>{znalezisko.title}</Text>
                    </View>
                    {/* <Text >{description}</Text> */}
                    <Button title="Add to favs" onPress={() => (dispatch(addFavouriteLink(znalezisko, store.getState().currentUser.id)))} />
                    <Button title="rm" onPress={() => (dispatch(removeFavouriteLink(znalezisko, store.getState().currentUser.id)))} />
                    <Button title="check sotre" onPress={() => console.log(store.getState())} />

                </View>
            </TouchableWithoutFeedback>
            <ZnaleziskoTopTabNavigator
                comments_count={znalezisko!.comments_count}
                related_count={znalezisko!.related_count}
                vote_count={znalezisko!.vote_count}
                bury_count={znalezisko!.bury_count}
                tags={znalezisko!.tags}
            />
            {/* </ScrollView> */}
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