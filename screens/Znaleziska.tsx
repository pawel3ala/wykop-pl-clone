import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Text, View } from '../components/Themed';
import { links } from '../constants/FakeData'
import Link from '../components/Link'
import { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios'
import md5 from "react-native-md5";


const Znaleziska = (props) => {

    const config = {
        appKey: 'XVnNJ8CwBc',
        appSecret: 'K2y2UpZTCo'
    }

    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    
    const fetchData = (page) => {

        const url = `https://a2.wykop.pl/Links/Promoted/page/${page}/appkey/XVnNJ8CwBc/`

        axios.defaults.headers.common['apisign'] = md5.hex_md5(`${config.appSecret}${url}`);
        axios.post(url)
            .then((response) => {
                const { data: { data: dataToBeLoaded } } = response
                setData([...data, ...dataToBeLoaded])
            })
            .catch((err) => console.error(err))
    }

    const loadMoreData = () => {
        setPage(prvPage => prvPage + 1)
    }

    // TODO: Load only what I need
    // TDOD: figure out why useFocusEffect does not work
    useEffect(() => {
        fetchData(page)
    }, [page])

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
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.title}
            onEndReachedThreshold={0.9}
            onEndReached={loadMoreData}
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

