import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const CheckoutOptionScreen = props => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Cash Payment')}
          style={{
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
            Pay in cash
          </Text>
          <View>
            <FontAwesome name="money" size={22} color="#971818" />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Payment')}
          style={{
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
            Pay with card
          </Text>
          <View>
            <FontAwesome name="credit-card" size={22} color="#971818" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckoutOptionScreen;
