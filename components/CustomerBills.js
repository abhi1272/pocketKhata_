import * as React from 'react';
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

import BillItem from './BillItem'

export default function CustomerBills () {
  return <View style={styles.container}>
        <BillItem />
        <BillItem />
        <BillItem />
  </View>
}

const styles=StyleSheet.create({
  container: {
    flex:1,
    paddingVertical:12,
    paddingHorizontal:8
  }
})
