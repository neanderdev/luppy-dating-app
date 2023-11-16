import { StatusBar } from 'react-native';

import { AuthContextProvider } from './src/contexts/AuthContext';

import { Routes } from './src/routes/index';

export default function App() {
  return (
    <AuthContextProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Routes />
    </AuthContextProvider>
  );
}
