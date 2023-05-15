import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { COLORS } from '../utils/constants';

export default function CustomerDetailHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.summaryBox}>
        <View style={{ borderBottomWidth: 1, paddingHorizontal: 12, borderColor: '#D2CBCB',paddingVertical:8 }}>
          <Text style={styles.subHeading}>ABC Medicals</Text>
        </View>
        <View style={{paddingHorizontal: 12,paddingVertical:8  }}>
          <Text style={styles.subHeading}>Total Balance: 123123</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.SECONDARY,
    padding: 16,
  },
  summaryBox: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderRadius: 12,
  },
  subHeading: {
    color: COLORS.SECONDARY,
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 1,
  },
});
