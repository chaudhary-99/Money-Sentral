// src/screens/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('RegisterScreen'); // Navigate to Register Screen
    }, 3000); // 3 seconds delay
  }, []);

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/logo.png')} 
        style={styles.logo} // Reduced logo size
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#094268', // Matches your primary color
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250, // Reduce the size of the logo
    height: 40,
  },
});

export default SplashScreen;
