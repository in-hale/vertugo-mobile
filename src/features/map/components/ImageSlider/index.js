import {Dimensions, StyleSheet, View} from "react-native";
import {Image} from "react-native-elements";
import Swiper from "react-native-swiper";
import React from "react";

const ImageSlider = ({ images, style }) => {
  return <Swiper scrollEnabled={false} removeClippedSubviews={false} style={{ ...styles.swiper, ...style }} showsButtons showsPagination={false}  >
    {
      images.map(imageUrl => (
        <View style={styles.slide} key={imageUrl}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
        </View>
      ))
    }
  </Swiper>
}

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  swiper: {
    height: 200
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  image: {
    flex: 1,
    width,
    maxHeight: '100%'
  }
});

export default ImageSlider;
