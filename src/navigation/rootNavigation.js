import * as React from 'react';

export const navigationRef = React.createRef();
export const mapRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export const mapZoomToLocation = (position) => {
  if (position) {
    mapRef.current.animateToRegion({
      latitude: parseFloat(position.latitude),
      longitude: parseFloat(position.longitude),
      latitudeDelta: 0.03,
      longitudeDelta: 0.02,
    }, 1000);
  }
};

export const mapZoomToLocationWithOffset = (position, offset) => {
  mapZoomToLocation({
    longitude: position.longitude + offset.x,
    latitude: position.latitude + offset.y,
  });
};
