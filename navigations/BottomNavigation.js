import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
//Custom Imports
import Customer from '../screens/Customer'
import AddCustomer from '../screens/AddCustomer';
import Dashboard from '../screens/Dashboard'
import CustomerNavigation from './CustomerNavigation'
import CustomerDetail from '../screens/CustomerDetail'
const Tab = createBottomTabNavigator();

const TAB_BAR_ICONS = {
  Dashboard: 'home',
  Customer: 'people',
  Bill: 'book',
  Payment: 'card',
  Logout: 'logout'
}
const TAB_COLORS = {
  Dashboard: COLORS.PRIMARY,
  Customer: COLORS.SECONDARY,
  Bill: COLORS.PRIMARY2,
  Payment: COLORS.SECONDARY2
}

import {COLORS} from '../utils/constants'
import { AuthContext } from '../context/authContext';

export default function BottomNavigation() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
          headerShown: true,
          headerStyle:{
             backgroundColor: TAB_COLORS[route.name],
            borderBottomWidth:0,
            borderColor:TAB_COLORS[route.name],
            shadowColor: 'transparent'
          },
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name={TAB_BAR_ICONS[route.name]} color={color} size={size} />
          },
          tabBarActiveTintColor: COLORS.PRIMARY2,
          tabBarInactiveTintColor: '#C6C6C6',
          tabBarShowLabel: true,
          tabBarStyle: {
            paddingVertical: 8
          }
        })}
    >
      <Tab.Screen name="Dashboard" component={CustomerDetail} />
      <Tab.Screen name="Customer" 
      options={{
          title: 'Customer',
          headerShown: false,
          headerStyle: {
            backgroundColor: COLORS.SECONDARY,
            borderBottomWidth:0,
            borderColor:COLORS.SECONDARY,
            shadowColor: 'transparent'
          }}}
      component={CustomerNavigation} />
      <Tab.Screen name="Bill" component={Customer} />
      <Tab.Screen name="Payment" component={Customer} />
    </Tab.Navigator>
  );
}
