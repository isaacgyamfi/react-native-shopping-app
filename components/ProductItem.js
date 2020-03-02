import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

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
          style={{
            backgroundColor: '#971818',
            height: 40,
            width: 40,
            color: '#fff',
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20
          }}
          onPress={() => addProdToCart(item)}
        >
          <AntDesign name="shoppingcart" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductItem;
