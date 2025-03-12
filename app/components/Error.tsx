import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Error = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Error loading products. Please try again later.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: '#ff4444',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Error;
