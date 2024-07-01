import React, { useEffect, useRef, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image, Animated, Modal } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const [israelTime, setIsraelTime] = useState('');
  const [showAd, setShowAd] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(100)).current; // Initial position for sliding animation

  useEffect(() => {
    // Simulate loading or any other necessary initialization logic
    setTimeout(() => {
      setShowAd(true); // Show the ad after a delay
    }, 2000); // 2000 milliseconds (2 seconds) delay

    // Fade in animation for the button
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // 1 second duration for the animation
      useNativeDriver: true,
    }).start();

    // Update Israel time every second
    const interval = setInterval(() => {
      const date = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Jerusalem' });
      setIsraelTime(date);
    }, 1000);

    return () => clearInterval(interval);
  }, [fadeAnim]);

  const handleGetStarted = () => {
    // Slide animation for the button
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500, // 0.5 second duration for the animation
      useNativeDriver: true,
    }).start();
    // Navigate to the main screen after the animation completes
    setTimeout(() => {
      navigation.navigate('home');
    }, 500);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://t3.ftcdn.net/jpg/05/16/05/76/360_F_516057644_qMGY5IZoNNOkCLI5vJqtNpXSIU9J5Kmx.jpg' }}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.topLeft}>
        <Text style={styles.israelTime}> Time: {israelTime}</Text>
      </View>
      <View style={styles.topRight}>
        <Image source={require('../src/Images/image.png')} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.logo}>Your Car Store</Text>
        <Text style={styles.tagline}>Explore the world of luxury cars</Text>
        <Animated.View style={[styles.buttonContainer, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
          <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showAd}
        onRequestClose={() => setShowAd(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              source={{ uri: 'https://www.oerlive.com/wp-content/uploads/2022/11/topic131086.jpeg' }} // Example image for the ad
              style={styles.adImage}
            />
            <Text style={styles.adText}>Welcome to our page! Check out the latest cars. 🚗</Text>
            <TouchableOpacity onPress={() => setShowAd(false)}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topLeft: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  topRight: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  tagline: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  },
  israelTime: {
    fontSize: 16,
    color: 'white',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ff5e3a',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    width: '80%', // Set the width to 80% of the screen
    marginHorizontal: '10%', // Center the modal horizontally
    marginTop: '50%', // Push the modal down from the top
  },
  adImage: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  adText: {
    fontSize: 16, 
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    fontSize: 16,
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default SplashScreen;
