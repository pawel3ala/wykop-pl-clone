import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Text, View } from '../components/Themed';
import { links } from '../constants/FakeData'
import Link from '../components/Link'


const Znaleziska = (props) => {

    const renderItem = ({ item }) => {
        return (
            <Link
                title={item.title}
                preview={item.preview}
                vote_count={item.vote_count}
                comments_count={item.comments_count}
            />
        )
    }

    return (
            <FlatList
                data={links}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
    )
}

export default Znaleziska

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

