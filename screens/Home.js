import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import Card from '../components/Card';
import { useNavigation } from '@react-navigation/native';
import { products } from '../src/data';

const Home = () => {
  const navigation = useNavigation();

  const onPressBasket = () => {
    navigation.navigate('basket', { products }); // Pass the products data to Basket
  };
  

  const renderData = () => {
    return products.map(item => (
      <Card
        key={item.id} // Assuming each product has xqa unique id
        name={item.name}
        price={item.price}
        info={item.info}
        image={item.image}
      />
    ));
  };

  return (
    <View>
      <Pressable onPress={onPressBasket} style={styles.basketButton}>
        <Image
          style={styles.basketIcon}
          source={{ uri: 'https://png.pngtree.com/png-vector/20191026/ourmid/pngtree-shopping-basket-icon-png-image_1871519.jpg' }}
        />
      </Pressable>
      <ScrollView>{renderData()}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  basketButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  basketIcon: {
    width: 50,
    height: 50,
  },
});

export default Home;
