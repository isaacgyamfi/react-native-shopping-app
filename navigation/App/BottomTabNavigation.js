import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons, Entypo } from '@expo/vector-icons';
import Header from '../../components/Header';
import HomeScreen from '../../screens/App/HomeScreen';
import ProductsScreen from '../../screens/App/ProductsScreen';
import CartScreen from '../../screens/App/CartScreen';
import CardPaymentScreen from '../../screens/App/CardPaymentScreen';
import CheckoutOptionScreen from '../../screens/App/CheckoutOptionScreen';
import NotificationScreen from '../../screens/App/NotificationScreen';
import AccountScreen from '../../screens/App/AccountScreen';
import MessageScreen from '../../screens/App/MessageScreen';
import ProductDetail from '../../screens/App/ProductDetail';
import { View, Text } from 'react-native';
import { ProductContext } from '../../contexts/ProductsContext';

const Stack = createStackNavigator();
const StackScreen = Stack.Screen;
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <StackScreen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: (props) => <Header {...props} />,
        }}
      />
      <StackScreen name="Account" component={AccountScreen} />
    </Stack.Navigator>
  );
};

const ProductsStack = () => {
  return (
    <Stack.Navigator>
      <StackScreen
        name="Products"
        component={ProductsScreen}
        options={{ headerTitle: (props) => <Header {...props} /> }}
      />
      <StackScreen name="Product Detail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

const CartStack = () => {
  return (
    <Stack.Navigator>
      <StackScreen
        name="Cart"
        component={CartScreen}
        options={{ headerTitle: (props) => <Header {...props} /> }}
      />
      <StackScreen name="Checkout" component={CheckoutOptionScreen} />
      <StackScreen name="Cash Payment" component={MessageScreen} />
      <StackScreen name="Payment" component={CardPaymentScreen} />
    </Stack.Navigator>
  );
};

const NotificationStack = () => {
  return (
    <Stack.Navigator>
      <StackScreen
        name="Notifications"
        component={NotificationScreen}
        options={{ headerTitle: (props) => <Header {...props} /> }}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const Screen = Tab.Screen;
const MainTab = () => {
  const { cart } = useContext(ProductContext);
  return (
    <Tab.Navigator
      tabBarOptions={{ activeTintColor: '#971818', inactiveTintColor: 'gray' }}
    >
      <Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              focused={focused}
              name="md-home"
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="Products"
        component={ProductsStack}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Entypo
              focused={focused}
              name="shopping-bag"
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="Cart"
        component={CartStack}
        options={{
          tabBarIcon: ({ focused, color, badgeCount = cart.length }) => (
            <View>
              <Ionicons
                focused={focused}
                name="md-cart"
                size={26}
                color={color}
              />
              {badgeCount > 0 && (
                <View
                  style={{
                    position: 'absolute',
                    right: -6,
                    top: -3,
                    backgroundColor: 'red',
                    borderRadius: 6,
                    width: 12,
                    height: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}
                  >
                    {badgeCount}
                  </Text>
                </View>
              )}
            </View>
          ),
        }}
      />
      <Screen
        name="Notification"
        component={NotificationStack}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              focused={focused}
              name="md-notifications"
              size={26}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
