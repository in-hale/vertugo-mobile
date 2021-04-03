import {Text, View, StyleSheet} from "react-native";
import {Rating} from "react-native-elements";
import React from "react";

const PlaceRating = ({ rating, reviewCount }) => (
  <View style={styles.ratingContainer}>
    <Rating style={styles.rating}  readonly startingValue={rating} imageSize={25} />
    <Text style={styles.ratingText}>({reviewCount})</Text>
  </View>
)

const styles = StyleSheet.create({
  rating: {
    paddingTop: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ratingText: {
    top: 2,
    left: 5,
    fontSize: 20
  },
})

export default PlaceRating;
