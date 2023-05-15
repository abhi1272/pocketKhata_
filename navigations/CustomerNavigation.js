import * as React from 'react';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {
  Text,
  View
} from 'react-native';

import Login from '../screens/Login';
import Customer from '../screens/Customer';
import AddCustomer from '../screens/AddCustomer';
import CustomerDetail from '../screens/CustomerDetail';

import { COLORS } from '../utils/constants';
import { AuthContext, AuthProvider } from '../context/authContext';
export default function CustomerNavigation() {
  function SplashScreen() {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  const { state } = React.useContext(AuthContext);
  return (
    <Stack.Navigator>
      {state.isLoading ? (
        // We haven't finished checking for the token yet
        <Stack.Screen name="Splash" component={SplashScreen} />
      ) : state.userToken == null ? (
        <Stack.Screen
          name="SignIn"
          component={Login}
          options={{
            title: "Sign in",
            animationTypeForReplace: state.isSignout ? "pop" : "push",
          }}
        />
      ) : (
        // User is signed in
        <>
          <Stack.Screen name="Customer" component={Customer} />
          <Stack.Screen name="AddCustomer" component={AddCustomer} />
          <Stack.Screen name="CustomerDetail" component={CustomerDetail} />
        </>
      )}
    </Stack.Navigator>
  );
}
