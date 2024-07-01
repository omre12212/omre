import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../routes/ScreenNames';

const Card = (props) => {
  const navigation = useNavigation();

  const onCardPress = () => {
    navigation.navigate(ScreenNames.CarInfo, { ...props });
  };

  return (
    <Pressable style={styles.card} onPress={onCardPress}>
      <Image source={props.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.price}>Price: ${props.price}</Text>
        <Text style={styles.readMore}>Read more</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#eaeaea',
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  info: {
    fontSize: 14,
    color: '#555',
    marginBottom: 3,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#009688',
  },
  readMore: {
    color: '#2196F3',
    textDecorationLine: 'underline',
    marginTop: 5,
  },
});

export default Card;
