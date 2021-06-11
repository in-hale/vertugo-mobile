import { Text, View, StyleSheet } from 'react-native';
import { Rating } from 'react-native-elements';
import React from 'react';
import { backgroundColor } from '../../../../styles';

const PlaceRating = ({
  rating, reviewsCount, size = 25, showCount = true,
}) => {
  const tintProp = backgroundColor == 'white' ? {} : { tintColor: backgroundColor };

  return (
    <View style={styles.ratingContainer}>
      <Rating
        style={styles.rating}
        type="custom"
        ratingBackgroundColor={backgroundColor}
        readonly
        startingValue={rating}
        imageSize={size}
        {...tintProp}
      />
      {
        showCount ? (
          <Text style={styles.ratingText}>
            (
            {reviewsCount}
            )
          </Text>
        ) : null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    paddingTop: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    top: 2,
    left: 5,
    fontSize: 20,
  },
});

export default PlaceRating;
