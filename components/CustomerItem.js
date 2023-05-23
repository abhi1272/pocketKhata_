import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Box, HStack,Avatar, VStack, Text, Spacer, Center } from "native-base";


import { COLORS } from '../utils/constants';
import { formatCurrency, formatDate } from '../utils/helperFuctions';

export default function CustomerItem({ customer, navigation }) {
  const getCustomerDetail = () => {
    navigation.navigate('Customer Detail')
  };
  return (
    <TouchableOpacity onPress={getCustomerDetail}>
      <Box ml="4"
          mr="2"
        borderBottomWidth="0"
        _dark={{
          borderColor: "muted.50",
        }}
        borderColor="muted.800"
        pl={["0", "4"]}
        pr={["0", "5"]}
        py="2"
      >
        <HStack space={[2, 3]} justifyContent="space-between">
          <Avatar
            size="48px"
            source={{
              uri: customer.image || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
            }}
          />
          <VStack>
            <Text
              _dark={{
                color: "warmGray.50",
              }}
              color="coolGray.800"
              bold
            >
              {customer.name}
            </Text>
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              {customer.area}
            </Text>
          </VStack>
          <Spacer />
          <VStack>
            <Text
              _dark={{
                color: "warmGray.50",
              }}
              color="red.600"
              bold
            >
              {formatCurrency(customer.totalBillAmount)}
            </Text>
            <Text
              fontSize="xs"
              color="coolGray.600"
              _dark={{
                color: "warmGray.50",
              }}
            >
              {formatDate(customer.updatedAt)}
            </Text>
          </VStack>
        </HStack>
      </Box>
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
    fontSize: 12,
    color: COLORS.TEXT_DARK,
    fontWeight: '600',
    marginBottom: 0,
  },
  subHeading: { fontSize: 10, color: COLORS.TEXT_LIGHT },
});
