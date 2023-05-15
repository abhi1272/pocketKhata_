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

import Ionicons from '@expo/vector-icons/Ionicons';

import CustomerItem from '../components/CustomerItem';
import CustomerSummary from '../components/CustomerSummary';
import AddCustomer from './AddCustomer';
import globalStyles from '../utils/globalStyles';

import { Avatar } from 'react-native-paper';

import { COLORS } from '../utils/constants';

import { getCustomer } from '../services/customerService';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Vishal Shrivastava',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Abhishek Kumar',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Vicky S',
  },
];

export default function Customer({ navigation }) {
  const [totalCustomer, setTotalCustomer] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [customerList, setCustomerList] = useState([]);
  const [openCustomerModal, setOpenCustomerModal] = useState(false);
  useEffect(() => {
    getCustomer()
      .then((response) => response.json())
      .then((data) => {
        setTotalCustomer(data.total);
        setTotalAmount(data.totalAmount);
        setCustomerList(data.data);
      });
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <CustomerSummary
        customerCount={totalCustomer}
        totalAmount={totalAmount}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: '#ffffff',
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
    color: '#ffffff',
  },
});
