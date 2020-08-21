import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductContextProvider from '../../contexts/ProductsContext';
import MainTab from './BottomTabNavigation';

const MainApp = () => {
  return (
    <ProductContextProvider>
      <MainTab />
    </ProductContextProvider>
  );
};

export default MainApp;
