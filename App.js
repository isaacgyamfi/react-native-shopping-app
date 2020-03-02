import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppContainer from './navigation/BottomTabNavigation';
import ProductContextProvider from './contexts/ProductsContext';

export default function App() {
  return (
    <ProductContextProvider>
      <NavigationContainer>
        <AppContainer />
      </NavigationContainer>
    </ProductContextProvider>
  );
}
