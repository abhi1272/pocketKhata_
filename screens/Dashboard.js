import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
  Platform,
  TextInput,
  TouchableHighlight,
  Modal,
} from 'react-native';
import {COLORS} from '../utils/constants'

export default function Dashboard() {
  return <View style={styles.container}>
    <View>
    <Text style={styles.heading}>Coming Soon!</Text>
    </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    alignItems:'center',
    justifyContent: 'center'
  },
  heading: {
    fontSize: 32,
    color:COLORS.TEXT_DARK
  }
});
