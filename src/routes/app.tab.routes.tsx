import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';

import { Chats } from '../screens/Chats';
import { Home } from '../screens/Home';
import { Matches } from '../screens/Matches';
import { Profile } from '../screens/Profile';

type AppTabRoutes = {
    home: undefined;
    chats: undefined;
    matches: undefined;
    profile: undefined;
}

export type AppNavigatorTabRoutesProps = BottomTabNavigationProp<AppTabRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppTabRoutes>();

export function AppTabRoutes() {
    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#E9525F',
            tabBarInactiveTintColor: '#E2DAEC',
            tabBarStyle: {
                backgroundColor: '#0B0B0E',
                borderTopWidth: 0,
                height: Platform.OS === "android" ? 'auto' : 96,
                paddingBottom: 40,
                paddingTop: 10
            },
            tabBarLabelStyle: {
                fontSize: 11,
                fontWeight: '400',
            }
        }}>
            <Screen
                name='home'
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="home" size={20} color={color} />
                    ),
                    title: 'Home'
                }}
            />

            <Screen
                name='chats'
                component={Chats}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="chatbubble-ellipses-outline" size={20} color={color} />
                    ),
                    title: 'Chats'
                }}
            />

            <Screen
                name='matches'
                component={Matches}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="heart" size={20} color={color} />
                    ),
                    title: 'Matches'
                }}
            />

            <Screen
                name='profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="user" size={20} color={color} />
                    ),
                    title: 'Profile'
                }}
            />
        </Navigator >
    );
}
