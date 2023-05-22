import React, { useState, useEffect } from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   FlatList,
//   SafeAreaView,
//   Image,
//   Platform,
//   TextInput,
//   TouchableHighlight,
//   Button,
//   Pressable,
//   DatePickerIOS
// } from 'react-native';

import { COLORS } from '../utils/constants';
import { Box, Button, Container, FormControl, Input, Select, Text, VStack } from 'native-base';
import { addCustomer, getPlaces } from '../services/customerService';

export default function AddCustomer() {
  const [places, setPlaces] = React.useState([])
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("")
  const [customerPlace, setCustomerPlace] = React.useState("");
  const [phone, setPhone] = React.useState("")
  useEffect(() => {
    getPlaces().then(response => {
      if (response.status === 200) {
        setPlaces(response.data)
      }
    })
  })

  const handleSubmit = () => {
    const placeIndex = places.findIndex(data => data.name === customerPlace)

    const customerObj = {
      area: address,
      name,
      phoneNumber: phone,
      place: places[placeIndex]
    }
    addCustomer(customerObj).then(response => console.log(response))
  }
  return <Box bg="white" flex="1" safeAreaTop paddingX={5}>
    <Text fontSize="xl" justifyContent="center" paddingBottom={5} textAlign={'center'}>Enter Customer Details</Text>
    <VStack space={5}>
      <FormControl isRequired>
        <Input size="xl" pt={4} pb={4} placeholder='Customer Name' onChangeText={value => setName(value)} />
        <FormControl.ErrorMessage>Name is Required</FormControl.ErrorMessage>
      </FormControl>
      <FormControl isRequired>
        <Input size="xl" pt={4} pb={4} placeholder='Address' onChangeText={value => setAddress(value)} />
      </FormControl>
      <Select pt={4} pb={4} size={'xl'} selectedValue={customerPlace} accessibilityLabel="Choose Place" placeholder="Choose Service" _selectedItem={{
        bg: "teal.600",
      }} mt={1} onValueChange={itemValue => setCustomerPlace(itemValue)}>
        {places.map(data => (
          <Select.Item label={data.name} value={data.name} />
        ))}
      </Select>
      <FormControl isRequired>
        <Input size="xl" pt={4} pb={4} placeholder='Mobile Number' keyboardType='numeric' onChangeText={value => setPhone(value)} />
      </FormControl>
      <Button size={'lg'} p={5} onPress={handleSubmit}>Add Customer</Button>
    </VStack>
  </Box>;
}
