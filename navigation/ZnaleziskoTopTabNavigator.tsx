import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Feather } from '@expo/vector-icons';
import Placeholder from '../components/Placeholder'

const Tab = createMaterialTopTabNavigator();

type ZnaleziskoTopTabNavigatorProps = {
    comments_count: number,
    related_count: number,
    tags: string,
    vote_count: number
    bury_count: number
}

export default function ZnaleziskoTopTabNavigator(props: ZnaleziskoTopTabNavigatorProps) {

    const {
        comments_count,
        related_count,
        tags,
        vote_count,
        bury_count
    } = props

    const getHashtagsCount = () => {
        if (!tags) return 0
        else return tags.split("#").length - 1
    }

    return (
        <Tab.Navigator tabBarOptions={{ showIcon: true, tabStyle: { flexDirection: 'row' } }}>
            <Tab.Screen
                options={{
                    title: comments_count.toString(),
                    tabBarIcon: () => <Feather name="flag" size={24} />
                }}
                name="comments"
                component={Placeholder}
            />
            <Tab.Screen
                options={{
                    title: related_count.toString(),
                    tabBarIcon: () => <Feather name="flag" size={24} />
                }}
                name="related_links"
                component={Placeholder}
            />
            <Tab.Screen
                options={{
                    title: getHashtagsCount().toString(),
                    tabBarIcon: () => <Feather name="flag" size={24} />
                }}
                name="hashtags"
                component={Placeholder}
            />
            <Tab.Screen options={{
                title: vote_count.toString(),
                tabBarIcon: () => <Feather name="flag" size={24} />
            }}
                name="votes"
                component={Placeholder}
            />
            <Tab.Screen options={{
                title: bury_count.toString(),
                tabBarIcon: () => <Feather name="flag" size={24} />
            }}
                name="burries"
                component={Placeholder}
            />
        </Tab.Navigator>
    );
}