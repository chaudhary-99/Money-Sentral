// src/components/Layout.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: 0, // Offset for the NavBar height
  },
});

export default Layout;
