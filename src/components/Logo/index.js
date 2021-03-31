import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Logo = () => {
  return (
    <Text style={styles.text}>Vertugo</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#000",
    fontSize: 55,
    fontWeight: "bold"
  }
});

export default Logo;
