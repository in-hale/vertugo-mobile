import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeMap = () => {
  return (
    <View style={{
      paddingBottom: 50,
    }} >
      <Text style={styles.text}>Map</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#000",
    fontSize: 55,
    fontWeight: "bold"
  }
});

export default HomeMap;
