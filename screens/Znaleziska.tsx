import React from 'react'
import { StyleSheet, FlatList, TouchableHighlight } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Link from '../components/Link'
import { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios'
import md5 from "react-native-md5";

interface IZnalezisko {
    id: number,
    title: string,
    preview: string,
    comments_count: number,
    source_url: string,
    vote_count: number
}

const Znaleziska = () => {

    const config = {
        appKey: 'XVnNJ8CwBc',
        appSecret: 'K2y2UpZTCo'
    }

    const [data, setData] = useState<IZnalezisko[]>([])
    const [page, setPage] = useState(1)
    const navigation = useNavigation();

    const fetchData = (page: number) => {

        const url = `https://a2.wykop.pl/Links/Promoted/page/${page}/appkey/XVnNJ8CwBc/`
        axios.defaults.headers.common['apisign'] = md5.hex_md5(`${config.appSecret}${url}`);
        axios.post(url)
            .then((response) => {
                const { data: { data: fetchedData } } = response
                // Extracting the minimum amount of data to be held in component
                // console.log(fetchedData)
                const dataToBeSaved = fetchedData.map(item => (({ id, title, preview, comments_count, source_url, vote_count }) => ({ id, title, preview, comments_count, source_url, vote_count}))(item))
                setData([...data, ...dataToBeSaved])
            })
            .catch((err) => console.error(err))
    }

    const loadMoreData = () => {
        setPage(prvPage => prvPage + 1)
    }

    // TDOD: figure out why useFocusEffect does not work
    useEffect(() => {
        fetchData(page)
    }, [page])

    const renderItem = ({ item }) => {
        const { title, preview, vote_count, comments_count, id } = item

        return (
            <TouchableHighlight onPress={() => navigation.navigate('ZnaleziskoScreen', {id: id})}>
                <Link
                    title={title}
                    preview={preview}
                    vote_count={vote_count}
                    comments_count={comments_count}
                />
            </TouchableHighlight>
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

