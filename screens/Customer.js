import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableHighlight,
  Button
} from 'react-native';


import CustomerItem from '../components/CustomerItem';
import CustomerSummary from '../components/CustomerSummary';
import AddCustomer from './AddCustomer';

import { Avatar } from 'react-native-paper';

import { COLORS } from '../utils/constants';

import { HTTP_METHODS, httpCall } from '../services/httpService';
import { AuthContext } from '../context/authContext';

export default function Customer({ navigation }) {
  const [totalCustomer, setTotalCustomer] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [customerList, setCustomerList] = useState([]);
  useEffect(() => {
    httpCall(HTTP_METHODS.GET, 'customer')
      .then((data) => {
        setTotalCustomer(data.total);
        setTotalAmount(data.totalAmount);
        setCustomerList(data.data);
      });
  }, []);
  const { signOut } = React.useContext(AuthContext).authContext
  return (
    <View style={{ flex: 1 }}>
      <CustomerSummary
        customerCount={totalCustomer}
        totalAmount={totalAmount}
      />
      <Button title="logout" onPress={signOut} />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 0,
        }}>
        <TextInput
          placeholderTextColor={COLORS.TEXT_LIGHT}
          style={styles.searchInput}
          placeholder="Search Customer"
        />
        <FlatList
          data={customerList}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item }) => <CustomerItem customer={item} navigation={navigation}/>}
          keyExtractor={(item) => item.uuid}
        />
      </View>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate('Add Customer');
        }}>
        <View style={styles.button}>
          <Text style={{ color: 'white' }}>Add Customer</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    marginBottom: 16,
    borderColor: '#F1F1FA',
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 18,
    color: 'black',
    backgroundColor: 'white',
  },
  separator: {
    borderWidth: 0.1,
    borderColor: '#D2CBCB',
  },
  button: {
    padding: 16,
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 25,
  },
});
