import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons, Entypo } from '@expo/vector-icons';
import Header from '../components/Header';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import CartScreen from '../screens/CartScreen';
import CardPaymentScreen from '../screens/CardPaymentScreen';
import CheckoutOptionScreen from '../screens/CheckoutOptionScreen';
import NotificationScreen from '../screens/NotificationScreen';
import AccountScreen from '../screens/AccountScreen';
import MessageScreen from '../screens/MessageScreen';

const Stack = createStackNavigator();
const StackScreen = Stack.Screen;
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <StackScreen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: props => <Header {...props} />
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
        options={{ headerTitle: props => <Header {...props} /> }}
      />
    </Stack.Navigator>
  );
};

const CartStack = () => {
  return (
    <Stack.Navigator>
      <StackScreen
        name="Cart"
        component={CartScreen}
        options={{ headerTitle: props => <Header {...props} /> }}
      />
      <StackScreen name="Checkout" component={CheckoutOptionScreen} />
      <StackScreen name="Message" component={MessageScreen} />
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
        options={{ headerTitle: props => <Header {...props} /> }}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const Screen = Tab.Screen;
const MainTab = () => {
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
          )
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
          )
        }}
      />
      <Screen
        name="Cart"
        component={CartStack}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              focused={focused}
              name="md-cart"
              size={26}
              color={color}
            />
          )
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
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
