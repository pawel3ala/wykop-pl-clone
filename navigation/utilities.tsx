import AddToFavourites from '../components/AddToFavouritesIcon';
import RateIcon from '../components/RateIcon'
import FlagIcon from '../components/FlagIcon'
import ShareIcon from '../components/ShareIcon'
import * as React from 'react';
import { View, Text } from 'react-native'
import FindIcon from '../components/FindIcon'
import AddIcon from '../components/AddIcon'
import { useRoute } from '@react-navigation/native';

function HeaderTitle() {
    const route = useRoute();
    return <Text>RouteName: {route.name}</Text>
}

export function generateScreenOptions(props, color: string) {

    const { route: { name: routeName } } = props
    switch (routeName) {
        case 'ZnaleziskaHomeScreen':
            return {
                headerShown: true,
                title: "ppp",
                headerStyle: { backgroundColor: color },
                headerLeft: () => <FindIcon />,
                headerTitle: () => <HeaderTitle />,
                headerRight: () => <AddIcon />
            }
        case 'WpisyScreen':
            return {
                headerShown: true,
                headerStyle: { backgroundColor: color },
                headerLeft: () => <FindIcon />,
                headerTitle: () => <HeaderTitle />,
                headerRight: () => <AddIcon />
            }
        case 'MojWykopScreen':
            return {
                headerShown: true,
                headerStyle: { backgroundColor: color },
                headerLeft: () => <FindIcon />,
                headerTitle: () => <HeaderTitle />,
                headerRight: () => <AddIcon />
            }
        case 'InboxScreen':
            return {
                headerShown: true,
                headerStyle: { backgroundColor: color },
                headerLeft: () => <FindIcon />,
                headerTitle: () => <HeaderTitle />,
            }
        case 'ProfilScreen':
            return {
                headerShown: true,
                headerStyle: { backgroundColor: color },
                headerLeft: () => <FindIcon />,
                headerTitle: () => <HeaderTitle />,
                headerRight: () => <ShareIcon />
            }
        case 'SearchScreen':
            return {
                headerShown: true,
                headerStyle: { backgroundColor: color },
                headerBackTitle: ' ',
                headerTitle: 'Szukaj'
            }
        case 'ZnaleziskoScreen':
            return {
                headerShown: true,
                headerStyle: { backgroundColor: color },
                headerBackTitle: ' ',
                headerRight: () => {
                    return (
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <AddToFavourites />
                            <RateIcon />
                            <FlagIcon />
                            <ShareIcon />
                        </View>
                    )
                }
            }
    }
}