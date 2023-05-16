import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
  Platform,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import globalStyles from '../utils/globalStyles';
import { Avatar } from 'react-native-paper';

import { COLORS } from '../utils/constants';
import { formatCurrency } from '../utils/helperFuctions';

export default function CustomerSummary({customerCount, totalAmount, entity}) {
  return (
    <View style={styles.container}>
      <View style={styles.summaryBox}>
        <View
          style={{
            ...styles.headContainer,
            borderRightWidth: 1,
            borderColor: '#D2CBCB',
          }}>
          <Text style={styles.heading}>Total {entity}</Text>
          <Text style={styles.subHeading}>{customerCount}</Text>
        </View>
        <View style={styles.headContainer}>
          <Text style={styles.heading}>You will receive</Text>
          <Text style={{...styles.subHeading,color:COLORS.PRIMARY2}}>{formatCurrency(totalAmount)}</Text>
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
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    borderRadius: 12,
  },
  headContainer: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    color: COLORS.TEXT_LIGHT,
    fontSize: 14,
    fontWeight: 400,
    textAlign: 'center',
  },
  subHeading: {
    color: COLORS.TEXT_DARK,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 1,
  },
  box: {
    flex: 1,
    height: 80,
    padding: 12,
    alignItems: 'center',
    backgroundColor: COLORS.PRIMARY,
    marginHorizontal: 10,
    borderRadius: 15,
    color: '#ffffff',
  },
});
