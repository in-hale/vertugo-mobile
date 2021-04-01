import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Map from "../Map";

const HomeMap = () => {
  return (
    <View style={styles.container}>
      <Map />
    </View>
  );
}

let {height, width} = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  }
});

export default HomeMap;
