import React from 'react';
import { Marker } from 'react-native-maps';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

const MapPin = ({ isSelected, ...args }) => {
  const color = isSelected ? '#ad000e' : 'red';

  return (
    <Marker centerOffset={{ x: 0, y: -17 }} {...args}>
      <Icon name="map-marker" type="material-community" color={color} size={40} />
    </Marker>
  );
};

MapPin.propTypes = {
  isSelected: PropTypes.bool,
};

MapPin.defaultProps = {
  isSelected: false,
};

export default MapPin;
