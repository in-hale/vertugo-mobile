import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Logo = ({ style }) => (
  <View style={style}>
    <Text style={styles.text}>Vertugo</Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 55,
    fontWeight: 'bold',
  },
});

export default Logo;
