import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';

import { mapZoomToLocation, mapRef } from "../../../../navigation/rootNavigation";

const Map = ({ children }) => {
  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(position => resolve(position), e => reject(e));
    });
  };

  return (
    <MapView
      style={styles.map}
      showsUserLocation
      ref={mapRef}
      onMapReady={() => {
        getCurrentLocation().then(({coords}) => (mapZoomToLocation(coords)), () => {
        })
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
