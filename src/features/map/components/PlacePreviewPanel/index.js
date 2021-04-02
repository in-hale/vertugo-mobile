import React from 'react';
import { SwipeablePanel } from 'rn-swipeable-panel';
import {Text, View, StyleSheet, Image, Dimensions} from "react-native";
import PropTypes from 'prop-types'
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window')

const PlacePreviewPanel = ({ isActive, onClose, place }) => {
  return (
    <SwipeablePanel allowTouchOutside onlySmall fullWidth isActive={isActive} onClose={onClose} noBar>
      <Swiper scrollEnabled={false} removeClippedSubviews={false} style={styles.wrapper} showsButtons showsPagination={false}  >
        {
          place.images.map(imageUrl => (
            <View style={styles.slide} key={imageUrl}>
              <Image style={styles.image} source={{ uri: imageUrl }} />
            </View>
          ))
        }
      </Swiper>
      <View style={styles.contentView}>
        <Text style={styles.placeNameText}>
          {place.name}
        </Text>
      </View>
    </SwipeablePanel>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 175
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
    borderColor: 'black',
    borderWidth: 1,
    margin: 10
  },
  placeNameText: {
    fontSize: 25,
    fontWeight: "bold"
  }
})

PlacePreviewPanel.propTypes = {
  isActive: PropTypes.bool,
  place: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    rating: PropTypes.number,
    images: PropTypes.array
  })
}

PlacePreviewPanel.defaultProps = {
  isActive: false,
  place: {
    id: null,
    name: '',
    rating: 0,
    images: []
  }
}

export default PlacePreviewPanel;
