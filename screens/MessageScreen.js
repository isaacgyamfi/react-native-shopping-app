import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { ProductContext } from '../contexts/ProductsContext';

const MessageScreen = () => {
  const { cart, calcTotalCostInCart } = useContext(ProductContext);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 36, color: '#971818' }}>
        GH₵{calcTotalCostInCart(cart)}
      </Text>
      <Text>Thank you for purchasing from us.</Text>
      <Text>See the Sales Person to make payment.</Text>
    </View>
  );
};

export default MessageScreen;
