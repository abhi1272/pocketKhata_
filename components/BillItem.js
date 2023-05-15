import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { COLORS } from '../utils/constants';
import moment from 'moment';

export default function BillItem () {
  return <View style={styles.container}>
  <View style={styles.box}>
  <View>
  <Text style={styles.heading}>
  25/03/2023 - 3.35 AM
  </Text>
  <Text style={styles.subHeading}> Balance: 123</Text>
  </View>
  <View>
  <Text style={styles.billHeading}>R-17091</Text>
  <Text style={styles.bill}>500</Text>
  </View>
  <View>
  <Text style={styles.payment}>500</Text>
  </View>
  </View>
  </View>
}



const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom:8,
    borderRadius:5,
    borderWidth:1,
    borderColor:'#e5e5e5',
    shadowOpacity:.1,
    shadowOffsetWidth:5,
    shadowOffsetHeight:5,
    shadowColor: '#D2CBCB',
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    flexWrap: 'wrap',
  },
  heading: {
    fontSize: 12,
    color: COLORS.TEXT_DARK,
    fontWeight: '600',
    marginBottom: 6,
  },
  subHeading: { fontSize: 12, color: COLORS.TEXT_LIGHT },
  payment: {
    color:COLORS.GREEN,
    fontWeight: 'bold',
    fontSize:14
  },
  billHeading:{
    fontSize: 14,
    color:COLORS.TEXT_DARK,
    textAlign:'center'
  },
  bill:{
    color:COLORS.PRIMARY2,
    fontWeight: 'bold',
    fontSize:14,
    textAlign:'center'
  }
});