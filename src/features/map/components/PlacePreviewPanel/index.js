import React from 'react';
import { SwipeablePanel } from 'rn-swipeable-panel';
import {Text, View, StyleSheet, Dimensions, TouchableWithoutFeedback} from "react-native";
import PropTypes from 'prop-types'
import Swiper from 'react-native-swiper';
import { Rating, Image } from 'react-native-elements';
import LikeButton from "../LikeButton";

const { width } = Dimensions.get('window')

const PlaceRating = ({ rating, reviewCount }) => (
  <View style={styles.ratingContainer}>
    <Rating style={styles.rating} readonly startingValue={rating} imageSize={25} />
    <Text style={styles.ratingText}>({reviewCount})</Text>
  </View>
)

const PlacePreviewPanel = ({ isActive, onClose, place, onPress }) => {
  return (
    <SwipeablePanel scrollViewProps={{
      scrollEnabled: false
    }} noBar allowTouchOutside onlySmall fullWidth isActive={isActive} onClose={onClose}>
      <Swiper scrollEnabled={false} removeClippedSubviews={false} style={styles.wrapper} showsButtons showsPagination={false}  >
        {
          place.images.map(imageUrl => (
            <View style={styles.slide} key={imageUrl}>
              <Image style={styles.image} source={{ uri: imageUrl }} />
            </View>
          ))
        }
      </Swiper>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.contentView}>
          <View style={styles.placeNameContainer}>
            <Text style={styles.placeNameText}>
              {place.name}
            </Text>
            <LikeButton active={place.isStarred} style={styles.star} onPress={() => { alert('kek') }} />
          </View>
          <PlaceRating rating={place.rating} reviewCount={place.reviewCount} />
        </View>
      </TouchableWithoutFeedback>
    </SwipeablePanel>
  );
}

const styles = StyleSheet.create({
  wrapper: {
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
    height: '100%'
  },
  contentView: {
    margin: 10,
    alignItems: 'flex-start'
  },
  placeNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },
  placeNameText: {
    fontSize: 25,
    fontWeight: "bold"
  },
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
  star: {
    position: 'absolute',
    right: 0
  }
})

PlacePreviewPanel.propTypes = {
  isActive: PropTypes.bool,
  place: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    rating: PropTypes.number,
    images: PropTypes.array,
    isStarred: PropTypes.bool
  }),
  onClose: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
}

PlacePreviewPanel.defaultProps = {
  isActive: false,
  place: {
    id: null,
    name: '',
    rating: 0,
    images: [],
    isStarred: false
  }
}

export default PlacePreviewPanel;
