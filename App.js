import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
// You can import from local files
// or any pure javascript modules available in npm

import BottomNavigation from './navigations/BottomNavigation';
import { AuthContext, AuthProvider } from './context/authContext';
import RootNavigator from './navigations/RootNavigator';

export default function App() {
  return (
    <NativeBaseProvider>
      <AuthProvider value={AuthContext}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </AuthProvider>
    </NativeBaseProvider>
  );
}

