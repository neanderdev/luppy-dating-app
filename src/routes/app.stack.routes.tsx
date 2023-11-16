import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Chat } from '../screens/Chat';
import { EditProfile } from '../screens/EditProfile';
import { Event } from '../screens/Event';
import { Notifications } from '../screens/Notifications';
import { PreviewProfile } from '../screens/PreviewProfile';
import { PreviewProfileClicked } from '../screens/PreviewProfileClicked';

import { AppTabRoutes } from './app.tab.routes';

type AppStackRoutes = {
    homeStack: undefined;
    event: undefined;
    chat: undefined;
    notifications: undefined;
    editProfile: undefined;
    previewProfile: undefined;
    previewProfileClicked: undefined;
}

export type AppNavigatorStackRoutesProps = NativeStackNavigationProp<AppStackRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AppStackRoutes>();

export function AppStackRoutes() {
    return (
        <Navigator
            screenOptions={{ headerShown: false }}
        >
            <Screen
                name="homeStack"
                component={AppTabRoutes}
            />

            <Screen
                name="event"
                component={Event}
            />

            <Screen
                name="chat"
                component={Chat}
            />

            <Screen
                name="notifications"
                component={Notifications}
            />

            <Screen
                name="editProfile"
                component={EditProfile}
            />

            <Screen
                name="previewProfile"
                component={PreviewProfile}
            />

            <Screen
                name="previewProfileClicked"
                component={PreviewProfileClicked}
            />
        </Navigator>
    )
}

