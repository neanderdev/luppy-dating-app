import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { View } from 'react-native';

import { Loading } from '../components/Loading';

import { useAuth } from '../hooks/useAuth';

import { AppStackRoutes } from "./app.stack.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
    const { user, isLoadingUserStorageData } = useAuth();

    const theme = DefaultTheme;
    theme.colors.background = '#0b0b0e';

    if (isLoadingUserStorageData) {
        return <Loading />
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#0b0b0e',
            }}
        >
            <NavigationContainer theme={theme}>
                {user.id ? <AppStackRoutes /> : <AuthRoutes />}
            </NavigationContainer>
        </View>
    );
}
