import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ProductContext } from '../../contexts/ProductsContext';
import { globalStyles } from '../../components/global';

const ProductDetail = ({ route }) => {
  const { addProdToCart } = useContext(ProductContext);
  const { item } = route.params;
  return (
    <View style={{ paddingTop: 10, paddingHorizontal: 10 }}>
      <View>
        <View>
          <Text style={{ alignSelf: 'center', fontSize: 18 }}>{item.name}</Text>
        </View>
        <View style={{ width: 200, height: 200 }}>
          <Image source={{ uri: item.imageUrl }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 30,
              color: '#971818',
              paddingVertical: 10,
            }}
          >
            GH₵{item.price}
          </Text>
          <TouchableOpacity
            style={globalStyles.addToCartBtn}
            onPress={() => addProdToCart(item)}
          >
            <AntDesign name="shoppingcart" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ fontWeight: 'bold' }}>Description</Text>
          <Text style={{ fontSize: 14, padding: 10 }}>{item.description}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;
