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

import {COLORS} from '../utils/constants'
import CustomerDetailHeader from '../components/CustomerDetailHeader'
import BillItem from '../components/BillItem'
import CustomerBills from '../components/CustomerBills'
export default function CustomerDetail() {
  return (
    <View style={styles.container}>
      <CustomerDetailHeader />
      <CustomerBills />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 22,
    color:COLORS.TEXT_DARK,
    textAlign:'center',
    fontWeight: 'bold',
    marginBottom: 12
  },
  detailBox: {
    paddingVertical:16,
    paddingHorizontal: 12,
    display: 'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
    backgroundColor:'#fcfcfc',
    borderRadius: 15,
   shadowOpacity:.1
  },
  subHeading:{
    fontSize:16,
    fontWeight: 'bold'
  }
})