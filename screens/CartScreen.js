import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CartItem from '../components/CartItem';
import { ProductContext } from '../contexts/ProductsContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

const CartScreen = props => {
  const { cart, removeProdFromCart, calcTotalCostInCart } = useContext(
    ProductContext
  );
  return (
    <View style={styles.container}>
      {cart.length < 1 ? (
        <View style={{ alignSelf: 'center' }}>
          <Text style={{ fontSize: 18 }}>No item in cart</Text>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 9 }}>
            <FlatList
              data={cart}
              renderItem={({ item }) => (
                <CartItem item={item} removeProdFromCart={removeProdFromCart} />
              )}
            />
          </View>
          <View style={{ flex: 3 }}>
            <Text
              style={{
                fontSize: 15,
                alignSelf: 'center',
                marginVertical: 5
              }}
            >
              Number of items in cart: {cart.length}
            </Text>
            <Text
              style={{
                fontSize: 15,
                alignSelf: 'center',
                marginVertical: 5
              }}
            >
              Total cost of items in cart:{' '}
              <Text style={{ fontWeight: 'bold', color: '#971818' }}>
                GH₵{calcTotalCostInCart(cart)}
              </Text>
            </Text>
            <View>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Checkout')}
                style={{
                  height: 50,
                  width: 150,
                  borderWidth: 2,
                  borderColor: '#971818',
                  borderRadius: 5,
                  padding: 2,
                  marginVertical: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  flexDirection: 'row'
                }}
              >
                <Text
                  style={{
                    alignSelf: 'center',
                    alignContent: 'center',
                    color: '#971818',
                    fontSize: 18,
                    marginHorizontal: 5
                  }}
                >
                  Checkout
                </Text>
                <View>
                  <MaterialIcons name="payment" size={22} color="#971818" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  }
});

export default CartScreen;
