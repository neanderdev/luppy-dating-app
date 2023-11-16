import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Onboarding } from '../screens/Onboarding';
import { SignIn } from '../screens/SignIn';
import { SignUpStep1 } from '../screens/SignUpStep1';
import { SignUpStep2 } from '../screens/SignUpStep2';
import { SignUpStep3 } from '../screens/SignUpStep3';
import { Welcome } from '../screens/Welcome';

type AuthRoutes = {
    onboarding: undefined;
    welcome: undefined;
    signIn: undefined;
    signUpStep1: undefined;
    signUpStep2: undefined;
    signUpStep3: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="onboarding"
                component={Onboarding}
            />

            <Screen
                name="welcome"
                component={Welcome}
            />

            <Screen
                name="signIn"
                component={SignIn}
            />

            <Screen
                name="signUpStep1"
                component={SignUpStep1}
            />

            <Screen
                name="signUpStep2"
                component={SignUpStep2}
            />

            <Screen
                name="signUpStep3"
                component={SignUpStep3}
            />
        </Navigator>
    )
}
