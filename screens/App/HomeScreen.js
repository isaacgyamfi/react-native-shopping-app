import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Swiper from 'react-native-swiper';

const HomeScreen = () => {
  const category = [
    {
      name: 'Electronics',
      icon: 'game-controller',
      qty: 789,
      key: '1',
    },
    {
      name: 'Fashion',
      icon: 'game-controller',
      qty: 789,
      key: '2',
    },
    {
      name: 'Home Appliance',
      icon: 'game-controller',
      qty: 789,
      key: '3',
    },
    {
      name: 'Education',
      icon: 'game-controller',
      qty: 789,
      key: '4',
    },
    {
      name: 'Office',
      icon: 'game-controller',
      qty: 789,
      key: '5',
    },
    {
      name: 'Motor',
      icon: 'game-controller',
      qty: 789,
      key: '6',
    },
  ];
  return (
    <View style={styles.container}>
      {/* carousel showing the featured products */}
      <View style={styles.featured}>
        <Swiper loop={true}>
          <View style={styles.featured}>
            <Image
              style={styles.image}
              source={require('../../assets/images/pexels-terje-sollie-298863.jpg')}
            />
          </View>
        </Swiper>
      </View>

      {/* grid showing the product categories */}
      <View style={styles.category}>
        <FlatList
          data={category}
          numColumns={3}
          renderItem={({ item }) => (
            <View style={styles.categoryItem}>
              <Entypo name={item.icon} size={50} />
              <Text style={{ textAlign: 'center', fontSize: 12 }}>
                {item.name}
              </Text>
              <Text style={{ fontWeight: 'bold' }}>{item.qty}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  featured: {
    height: Dimensions.get('screen').height / 3,
  },
  image: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height / 3,
  },
  category: {
    alignItems: 'center',
  },
  categoryItem: {
    borderColor: '#040F34',
    borderWidth: 2,
    borderRadius: 10,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
});
