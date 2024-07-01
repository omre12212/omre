import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../routes/ScreenNames';


const CarInfo = (props) => {
    const { name, price, image, info } = props.route.params;
    console.log("image", image);
    const navigation = useNavigation();
    const [quantity, setQuantity] = useState(1);

    const onBuyPress = () => {
        // Navigate to the 'Buy' screen
        navigation.navigate('buy',{name, price, image, info,quantity});
    };

    const addToCart = () => {
        navigation.navigate('buy',{name, price, image, info,quantity});
    };

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.buy}>
                <Image source={image} style={styles.image} />
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.price}>Price: ${price}</Text>
                <View style={styles.quantityContainer}>
                    <Text style={styles.quantity}>Quantity: {quantity}</Text>
                    <View style={styles.quantityButtons}>
                        <Pressable onPress={decrementQuantity}>
                            <Text style={styles.quantityButton}>-</Text>
                        </Pressable>
                        <Pressable onPress={incrementQuantity}>
                            <Text style={styles.quantityButton}>+</Text>
                        </Pressable>
                    </View>
                </View>
                <Pressable onPress={addToCart} style={styles.addToCartButton}>
                    <Text style={styles.addToCartButtonText}>Add to Cart</Text>
                </Pressable>
                <Pressable onPress={onBuyPress} style={styles.buyButton}>
                    <Text style={styles.buyButtonText}>Buy</Text>
                </Pressable>
                <Text style={styles.info}>{info}</Text>
            </View>
        </View>
    );
};

export default CarInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    image: {
        width: 200,
        height: 150,
        resizeMode: 'cover',
        marginBottom: 10,
        borderRadius: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: '#666666',
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007bff',
        marginBottom: 10,
    },
    info: {
        marginTop: 10,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    quantity: {
        fontSize: 18,
        marginRight: 10,
    },
    quantityButtons: {
        flexDirection: 'row',
    },
    quantityButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#007bff',
        marginHorizontal: 5,
    },
    addToCartButton: {
        backgroundColor: '#28a745',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    addToCartButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buyButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buyButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
