import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { globalStyles } from './global';

const ProductItem = ({ item, addProdToCart }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 5,
          borderWidth: 2,
          borderColor: '#ddd',
          borderRadius: 10,
          padding: 5
        }}
      >
        <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
          <Text style={{ fontSize: 15 }}>GH₵{item.price}</Text>
        </View>
        <TouchableOpacity
          style={globalStyles.addToCartBtn}
          onPress={() => addProdToCart(item)}
        >
          <AntDesign name="shoppingcart" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductItem;
