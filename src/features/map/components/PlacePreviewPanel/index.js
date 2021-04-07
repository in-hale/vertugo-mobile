import React from 'react';
import { SwipeablePanel } from 'rn-swipeable-panel';
import {Text, View, StyleSheet, TouchableWithoutFeedback} from "react-native";
import PropTypes from 'prop-types'
import LikeButton from "../LikeButton";
import ImageSlider from "../ImageSlider";
import PlaceRating from "../PlaceRating";
import {backgroundColor} from "../../../../styles";

const PlacePreviewPanel = ({ isActive, onClose, place, onPress }) => {
  return (
    <SwipeablePanel style={styles.panel} scrollViewProps={{
      scrollEnabled: false
    }} noBar allowTouchOutside onlySmall fullWidth isActive={isActive} onClose={onClose}>
      <ImageSlider imageUrls={place.imageUrls} />
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.contentView}>
          <View style={styles.placeNameContainer}>
            <Text style={styles.placeNameText}>
              {place.name}
            </Text>
            <LikeButton active={place.isFavourite} style={styles.star} onPress={() => { alert('kek') }} />
          </View>
          <PlaceRating rating={place.rating} reviewsCount={place.reviewsCount} />
        </View>
      </TouchableWithoutFeedback>
    </SwipeablePanel>
  );
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: backgroundColor
  },
  contentView: {
    margin: 10,
    alignItems: 'flex-start',
    backgroundColor: backgroundColor
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
  star: {
    position: 'absolute',
    right: 0
  }
})

PlacePreviewPanel.propTypes = {
  isActive: PropTypes.bool,
  place: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.number,
    imageUrls: PropTypes.array,
    isFavourite: PropTypes.bool
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
    imageUrls: [],
    isFavourite: false
  }
}

export default PlacePreviewPanel;
