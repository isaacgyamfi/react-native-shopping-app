import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

const CartItem = ({ item, removeProdFromCart }) => {
  return (
    <View>
      <View
        style={{
          borderBottomColor: '#ddd',
          borderBottomWidth: 1,
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <View>
          <Text style={{ fontSize: 18 }}>{item.name} </Text>
          <Text>GH₵{item.price}</Text>
        </View>
        <View>
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
            onPress={() => removeProdFromCart(item.id)}
          >
            <AntDesign name="delete" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
