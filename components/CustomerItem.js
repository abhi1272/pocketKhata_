import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { Avatar } from 'react-native-paper';

import { COLORS } from '../utils/constants';
import moment from 'moment';

export default function CustomerItem({ customer, navigation }) {
  const getCustomerDetail = () => {
    navigation.navigate('Customer Detail')
  };
  console.log(customer);
  return (
    <TouchableOpacity onPress={getCustomerDetail}>
      <View style={styles.container}>
        <Avatar.Text
          size={36}
          label={customer.name.substr(0, 1)}
          color={COLORS.SECONDARY2}
          style={{ backgroundColor: COLORS.SECONDARY, marginRight: 12 }}
        />
        <View style={styles.box}>
          <View style={{ width: 200 }}>
            <Text style={styles.heading}>{customer.name}</Text>
            <Text style={styles.subHeading}>{customer.area}</Text>
          </View>
          <View>
            <Text style={{ ...styles.heading, color: COLORS.PRIMARY2 }}>
              {customer.totalBillAmount}
            </Text>
            <Text style={styles.subHeading}>
              {moment(customer.updatedAt).format('L')}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
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
    fontSize: 14,
    color: COLORS.TEXT_DARK,
    fontWeight: '600',
    marginBottom: 6,
  },
  subHeading: { fontSize: 12, color: COLORS.TEXT_LIGHT },
});
