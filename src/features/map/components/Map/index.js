import React, {useRef} from 'react';
import { StyleSheet } from 'react-native';
import MapView from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';

const Map = ({ children }) => {
  const map = useRef(null);

  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(position => resolve(position), e => reject(e));
    });
  };

  const zoomToLocation = position => {
    if (position) {
      map.current.animateToRegion({
        latitude: parseFloat(position.coords.latitude),
        longitude: parseFloat(position.coords.longitude),
        latitudeDelta: 0.03,
        longitudeDelta: 0.02
      }, 1000)
    }
  }

  return (
    <MapView
      style={styles.map}
      showsUserLocation
      ref={map}
      onMapReady={() => {
        getCurrentLocation().then(zoomToLocation, () => {})
      }}
      initialRegion={{
        latitude: 53.908200,
        longitude: 27.558230,
        latitudeDelta: 0.35,
        longitudeDelta: 0.0421,
      }}
    >
      { children }
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    marginBottom: 0
  }
});

export default Map;
