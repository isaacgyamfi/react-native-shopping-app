import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from 'react-native';
import ProductItem from '../components/ProductItem';
import { AntDesign } from '@expo/vector-icons';
import { ProductContext } from '../contexts/ProductsContext';

const ProductsScreen = props => {
  const { pdts, addProdToCart, cart } = useContext(ProductContext);

  return (
    <View style={styles.container}>
      <View style={{ flex: 9 }}>
        <FlatList
          data={pdts}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ProductItem item={item} addProdToCart={addProdToCart} />
          )}
        />
      </View>
      <View style={{ flex: 2 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            alignSelf: 'center',
            marginVertical: 5
          }}
        >
          Total number of items in cart: {cart.length}
        </Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Cart')}
          style={styles.button}
        >
          <Text
            style={{
              alignSelf: 'center',
              alignContent: 'center',
              color: '#971818',
              fontSize: 18
            }}
          >
            View Cart
          </Text>
          <View>
            <AntDesign name="right" size={22} color="#971818" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  },
  button: {
    height: 50,
    width: 200,
    borderWidth: 2,
    borderColor: '#971818',
    borderRadius: 5,
    padding: 2,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row'
  }
});

export default ProductsScreen;
