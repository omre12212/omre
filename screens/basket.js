import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

const CartPage = ({ route }) => {
  const items = route.params.items; // Assuming route.params.items contains the cart items

  // Calculate total price for each item based on quantity and price
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  // Render individual cart item
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item.name}</Text>
      <Text>Price: ${item.price}</Text>
      <Text>Quantity: {item.quantity}</Text>
      <Text>Total: ${calculateTotalPrice(item)}</Text> {/* Calculate total price */}
      <Button title="Buy" onPress={() => handleBuy(item)} /> {/* Buy button */}
    </View>
  );

  // Buy button action
  const handleBuy = (item) => {
    // Add your buy logic here, such as navigating to a checkout screen or showing a confirmation message
    console.log('Buy:', item);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} // Assuming each item has a unique id
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  itemContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
});

export default CartPage;
