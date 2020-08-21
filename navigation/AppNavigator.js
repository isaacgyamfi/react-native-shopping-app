import React, { useState, useReducer } from 'react';
import AuthStack from './Auth/AuthNavigator';
import AsyncStorage from '@react-native-community/async-storage';
import MainApp from './App';
import authReducer from '../reducers/authReducer';

const AppNavigator = ({ navigation }) => {
  const [isLoggedIn, setiLoggedIn] = useState(false);

  const [state, dispatch] = useReducer(authReducer, {
    isLoading: true,
    isSignout: false,
    userToken: null,
  });

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  return <>{state.userToken != null ? <AuthStack /> : <MainApp />}</>;
};

export default AppNavigator;
