import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import AppContainer from './navigation/AppNavigator';
import ProductContextProvider from './contexts/ProductsContext';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <ProductContextProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ProductContextProvider>
  );
}
