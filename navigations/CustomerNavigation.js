import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Customer from '../screens/Customer';
import AddCustomer from '../screens/AddCustomer';
import CustomerDetail from '../screens/CustomerDetail';

import { COLORS } from '../utils/constants';
export default function CustomerNavigation() {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: COLORS.SECONDARY,
          borderBottomWidth: 0,
          borderColor: COLORS.SECONDARY,
          color: '#ffffff',
          shadowColor: 'transparent',
        },
      })}>
      <Stack.Screen name="Customer" component={Customer} />
      <Stack.Screen name="Add Customer" component={AddCustomer} />
      <Stack.Screen name="Customer Detail" component={CustomerDetail} />
    </Stack.Navigator>
  );
}
