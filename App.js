import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// You can import from local files
import Customer from './screens/Customer';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

import BottomNavigation from './navigations/BottomNavigation';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
