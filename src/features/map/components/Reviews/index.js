import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from '../../../../components/Icon';
import PlaceRating from '../PlaceRating';

const ReviewItem = ({ userLogin, rating, text }) => (
  <View style={styles.reviewItem}>
    <Icon name="account-circle" size={60} />
    <View style={styles.reviewContent}>
      <View style={styles.reviewLoginAndRatingContainer}>
        <PlaceRating rating={rating} showCount={false} size={15} />
        <Text style={styles.reviewLogin}>{userLogin}</Text>
      </View>
      <View style={styles.reviewTextContainer}>
        <Text style={styles.reviewText}>
          { text || '<No text>' }
        </Text>
      </View>
    </View>
  </View>
);

const Reviews = ({ reviews }) => {
  const renderedReviews = reviews.map((review) => <ReviewItem rating={review.rating} userLogin={review.user.login} text={review.text} key={review.id} />);

  const placeholder = (
    <Text style={{ paddingLeft: 6 }}>
      No reviews yet :(
    </Text>
  );

  return (
    <View style={styles.reviewsContainer}>
      {reviews.length > 0 ? renderedReviews : placeholder}
    </View>
  );
};

const styles = StyleSheet.create({
  reviewsContainer: {
    marginLeft: 5,
  },
  reviewItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  reviewContent: {
    paddingLeft: 5,
    flexGrow: 1,
  },
  reviewLoginAndRatingContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 2,
  },
  reviewLogin: {
    top: 2,
    paddingLeft: 5,
    fontWeight: '600',
  },
  reviewTextContainer: {
    marginRight: 60,
    justifyContent: 'center',
    flexGrow: 1,
  },
  reviewText: {
  },
});

export default Reviews;
