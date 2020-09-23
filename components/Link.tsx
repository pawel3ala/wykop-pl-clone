import React from 'react'
import { Text, View } from './Themed';
import { StyleSheet, Image } from 'react-native'

interface LinkProps {
    title: 'string',
    preview: 'string',
    vote_count: 'string',
    comments_count: 'string'
}

export default function Link(props: LinkProps) {

    const { title, preview, vote_count, comments_count } = props

    return (
        <View style={styles.container}>
            <View style={styles.leftPart}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.bottomPart}>
                    <Text> {vote_count}</Text>
                    <Text> {comments_count}</Text>
                    <Text>youtube.com</Text>
                </View>
            </View>
            <Image style={styles.imageContainer} source={{ uri: preview }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 10,
        margin: '2%',
        padding: 3,
    },
    imageContainer: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
        borderRadius: 10,
        flex: 1,
        margin: '2%'
    },
    bottomPart: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: '5%'
    },
    leftPart: {
        flex: 3,
        justifyContent: 'space-evenly'
    },
    title: {
        margin: '4%'
    }
});


