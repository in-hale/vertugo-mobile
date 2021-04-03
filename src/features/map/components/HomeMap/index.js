import React, { useEffect } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import MapPin from "../MapPin";
import Map from "../Map";
import PlacePreviewPanel from "../PlacePreviewPanel";
import { previewPlace, closePreview, loadOverviewPins, viewPlace } from "../../actions/map.actions"
import PressableIcon from "../../../../components/PressableIcon";

const OverlayIcons = ({ children }) => {
  const xOffset = 15;
  const yOffset = 50;

  const sharedIconProps = {
    size: 40,
    color: 'black',
    style: {
      paddingBottom: 10
    }
  }

  return (
    <View style={{
      position: 'absolute',
      flexDirection: 'column',
      top: yOffset,
      left: xOffset
    }} >
      {
        children.map(child => React.cloneElement(child, {
          key: child.props.name,
          ...sharedIconProps,
          ...child.props
        }))
      }
    </View>
  );
};

const HomeMap = ({ navigation, isPreviewActive, previewedPlace, overviewPins, placePreview, previewClose, overviewPinsLoad, placeView }) => {
  useEffect(overviewPinsLoad, []);

  return (
    <View style={styles.container}>
      <Map>
        {overviewPins.map(pin =>
            <MapPin coordinate={pin.location} onPress={() => placePreview(pin.id)} key={pin.id} isSelected={pin.isSelected} />
        )}
      </Map>
      <PlacePreviewPanel isActive={isPreviewActive} place={previewedPlace} onClose={previewClose} onPress={() => { placeView(previewedPlace.id) }} />
      <OverlayIcons>
        <PressableIcon name='menu' onPress={() => { navigation.openDrawer() }} />
        <PressableIcon name='filter' onPress={() => { navigation.navigate('Filters') }} />
      </OverlayIcons>
    </View>
  );
}

let {height, width} = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  }
});

HomeMap.propTypes = {
  isPreviewActive: PropTypes.bool,
  previewedPlace: PropTypes.object,
  overviewPins: PropTypes.array,
  placePreview: PropTypes.func.isRequired,
  previewClose: PropTypes.func.isRequired,
  overviewPinsLoad: PropTypes.func.isRequired
}

HomeMap.defaultProps = {
  isPreviewActive: false,
  previewedPlace: undefined,
  overviewPins: []
}

const mapStateToProps = state => ({
  isPreviewActive: state.map.isPreviewActive,
  previewedPlace: state.map.previewedPlace,
  overviewPins: state.map.overviewPins
})

const mapDispatchToProps = dispatch => ({
  placePreview: (id) => dispatch(previewPlace(id)),
  previewClose: () => dispatch(closePreview()),
  overviewPinsLoad: () => dispatch(loadOverviewPins()),
  placeView: (id) => dispatch(viewPlace(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeMap);
