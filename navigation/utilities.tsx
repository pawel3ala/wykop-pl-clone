
import AddToFavourites from '../components/AddToFavouritesIcon';
import RateIcon from '../components/RateIcon'
import FlagIcon from '../components/FlagIcon'
import ShareIcon from '../components/ShareIcon'
import * as React from 'react';
import { View, Text } from 'react-native'
import FindIcon from '../components/FindIcon'
import AddIcon from '../components/AddIcon'

function HeaderTitle(props) {
    const { routeName } = props
    return <Text>RouteName: {routeName}</Text>
}

export function generateScreenOptions(props) {
    const { route: { name: routeName } } = props
    switch (routeName) {
        case 'ZnaleziskaHomeScreen':
            return {
                headerShown: true,
                headerLeft: (props) => <FindIcon {...props} routeName={routeName} />,
                headerTitle: (props) => <HeaderTitle {...props} routeName={routeName} />,
                headerRight: (props) => <AddIcon {...props} routeName={routeName} />
            }
        case 'SearchScreen':
            return {
                headerShown: true,
                headerBackTitle: ' ',
                headerTitle: 'Szukaj'
            }
        case 'ZnaleziskoScreen':
            return {
                headerShown: true,
                headerBackTitle: ' ',
                headerRight: (props) => {
                    return (
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <AddToFavourites {...props} />
                            <RateIcon />
                            <FlagIcon />
                            <ShareIcon />
                        </View>
                    )
                }
            }
    }
}