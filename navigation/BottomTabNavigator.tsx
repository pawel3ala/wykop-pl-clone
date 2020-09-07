import { Ionicons, Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Znaleziska from '../screens/Znaleziska';
import TabTwoScreen from '../screens/TabTwoScreen';
import {
  BottomTabParamList,
  TabZnaleziskaParamList,
  TabWpisyTabParamList,
  TabMojWykopParamList,
  TabInboxParamList,
  TabProfilParamList
} from '../types';
import SearchStackNavigator from './SearchStackNavigator'
import { Button, View, Text } from 'react-native'
import { useNavigation, useNavigationState, useRoute } from '@react-navigation/native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Search from '../components/Search'
import DodajZnaleziskoScreen from '../screens/DodajZnaleziskoScreen'
import Znalezisko from '../components/Znalezisko';
import AddToFavourites from '../components/AddToFavouritesIcon';
import RateIcon from '../components/RateIcon'
import FlagIcon from '../components/FlagIcon'
import ShareIcon from '../components/ShareIcon'

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Znaleziska"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Znaleziska"
        component={ZnaleziskaNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Wpisy"
        component={WpisyNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="MojWykop"
        component={MojWykopNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Inbox"
        component={InboxNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profil"
        component={ProfilNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

function FindIcon(props) {
  const { navigate } = useNavigation();

  return <Entypo
    name="magnifying-glass"
    size={24}
    color="black"
    {...props}
    onPress={() => navigate('SearchScreen')}
  />
}

function HeaderTitle(props) {
  const { routeName } = props
  return <Text>RouteName: {routeName}</Text>
}

function AddButton(props) {
  const { navigate } = useNavigation();

  return <Entypo
    name="plus"
    size={24}
    color="black"

    {...props}
    onPress={() => handleAddButton(props, navigate)}
  />
}

function handleAddButton(props, navigate) {
  const { routeName } = props

  if (routeName === 'ZnaleziskaHomeScreen') {
    navigate('DodajZnaleziskoScreen')
  }
}

function generateScreenOptions(props) {
  const { route: { name: routeName } } = props
  switch (routeName) {
    case 'ZnaleziskaHomeScreen':
      return {
        headerShown: true,
        headerLeft: (props) => <FindIcon {...props} routeName={routeName} />,
        headerTitle: (props) => <HeaderTitle {...props} routeName={routeName} />,
        headerRight: (props) => <AddButton {...props} routeName={routeName} />
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

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const ZnaleziskaStack = createStackNavigator<TabZnaleziskaParamList>();

function ZnaleziskaNavigator() {

  return (
    <ZnaleziskaStack.Navigator
      screenOptions={(props) => generateScreenOptions(props)}
    >
      <ZnaleziskaStack.Screen
        name="ZnaleziskaHomeScreen"
        component={Znaleziska}
      />
      <ZnaleziskaStack.Screen
        name="ZnaleziskoScreen"
        component={Znalezisko}
      />
      <ZnaleziskaStack.Screen
        name="SearchScreen"
        component={Search}
      />
      <ZnaleziskaStack.Screen
        name="DodajZnaleziskoScreen"
        component={DodajZnaleziskoScreen}
      />
    </ZnaleziskaStack.Navigator>
  );
}

const WpisyStack = createStackNavigator<TabWpisyTabParamList>();

function WpisyNavigator() {
  return (
    <WpisyStack.Navigator>
      <WpisyStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </WpisyStack.Navigator>
  );
}

const MojWykopStack = createStackNavigator<TabMojWykopParamList>();

function MojWykopNavigator() {
  return (
    <MojWykopStack.Navigator>
      <MojWykopStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </MojWykopStack.Navigator>
  );
}

const InboxStack = createStackNavigator<TabInboxParamList>();

function InboxNavigator() {
  return (
    <InboxStack.Navigator>
      <InboxStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </InboxStack.Navigator>
  );
}

const ProfilStack = createStackNavigator<TabProfilParamList>();

function ProfilNavigator() {
  return (
    <ProfilStack.Navigator>
      <ProfilStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </ProfilStack.Navigator>
  );
}