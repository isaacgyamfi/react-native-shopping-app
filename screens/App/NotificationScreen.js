import React from 'react';
import { View, Text } from 'react-native';

const NotificationScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 18 }}>No new notification</Text>
    </View>
  );
};

export default NotificationScreen;
