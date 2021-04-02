import React from 'react';
import { SwipeablePanel } from 'rn-swipeable-panel';
import {Text} from "react-native";
import PropTypes from 'prop-types'

const PlacePreviewPanel = ({ isActive, onClose, place }) => {
  return (
    <SwipeablePanel allowTouchOutside onlySmall fullWidth isActive={isActive} onClose={onClose}>
      <Text>{place.name}</Text>
    </SwipeablePanel>
  );
}

PlacePreviewPanel.propTypes = {
  isActive: PropTypes.bool,
  place: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    rating: PropTypes.number
  })
}

PlacePreviewPanel.defaultProps = {
  isActive: false,
  place: {
    id: null,
    name: '',
    rating: 0
  }
}

export default PlacePreviewPanel;
