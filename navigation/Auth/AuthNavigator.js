import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../../screens/Auth/LoginScreen';
import SignUpScreen from '../../screens/Auth/SignUpScreen';
import ResetPasswordScreen from '../../screens/Auth/ResetPasswordScreen';

// implement auth context

const Stack = createStackNavigator();
const StackScreen = Stack.Screen;

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <StackScreen name="Login" component={LoginScreen} />
      <StackScreen name="Sign Up" component={SignUpScreen} />
      <StackScreen name="Reset Password" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
