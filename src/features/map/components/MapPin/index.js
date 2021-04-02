import React, {useRef} from 'react';
import { Marker } from 'react-native-maps';

const MapPin = ({ ...args }) => {
  return (
    <Marker { ...args } />
  );
}

export default MapPin;
