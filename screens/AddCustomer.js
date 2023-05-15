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
  Button,
  Pressable,
  DatePickerIOS
} from 'react-native';

import { COLORS } from '../utils/constants';

export default function AddCustomer() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.formHeading}>Enter Customer Details</Text>
        <TextInput
          placeholderTextColor={COLORS.TEXT_LIGHT}
          style={styles.formInput}
          placeholder="Customer Name"
        />
        <TextInput
          placeholderTextColor={COLORS.TEXT_LIGHT}
          inputMode='numeric'
          keyboardType='numeric'
          style={styles.formInput}
          placeholder="Bill Amount"
        />
        <TextInput
          placeholderTextColor={COLORS.TEXT_LIGHT}
          style={styles.formInput}
          placeholder="Enter Date"
        />
        <TextInput
          inputMode='numeric'
          keyboardType='number-pad'
          placeholderTextColor={COLORS.TEXT_LIGHT}
          style={styles.formInput}
          placeholder="Mobile Number"
        />
      </View>
      <Pressable>
        <View style={styles.button}>
          <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16 }}>
            Add Customer
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
   backgroundColor:'#ffffff',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  formInput: {
    height: 60,
    paddingHorizontal: 8,
    paddingVertical: 16,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#F1F1FA',
    borderRadius: 10,
  },
  button: {
    padding: 16,
    backgroundColor: COLORS.PRIMARY,
    color: '#ffffff',
    borderRadius: 15,
  },
  formHeading: {
    marginVertical: 16,
    color: COLORS.TEXT_LIGHT,
    fontSize: 18,
    textAlign: 'center',
  },
});
