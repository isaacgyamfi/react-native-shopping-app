import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Entypo name="shop" size={40} style={{ height: 40, width: 40 }} />
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Ionicons name="md-search" size={25} />
        </View>
        <View style={styles.avatar}>
          <TouchableOpacity onPress={() => navigation.navigate('Account')}>
            <Image
              source={require('../assets/avatar.png')}
              style={{ height: 25, width: 25 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 330
  },
  avatar: {
    borderRadius: 20,
    borderBottomWidth: 0,
    backgroundColor: '#ddd',
    width: 25,
    height: 25,
    marginLeft: 20
  }
});

export default Header;
