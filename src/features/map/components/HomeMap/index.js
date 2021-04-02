import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { connect } from "react-redux";

import MapPin from "../MapPin";
import Map from "../Map";
import PlacePreviewPanel from "../PlacePreviewPanel";
import { previewPlace, closePreview } from "../../actions/map.actions"

const HomeMap = ({ isPreviewActive, previewedPlace, overviewPins, placePreview, previewClose }) => {
  return (
    <View style={styles.container}>
      <Map>
        {
          overviewPins.map(pin =>
            (
              <MapPin coordinate={pin.location} onPress={() => placePreview(pin.id)} key={pin.id} />
            )
          )
        }
      </Map>
      <PlacePreviewPanel isActive={isPreviewActive} place={previewedPlace} onClose={previewClose} />
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

const mapStateToProps = state => ({
  isPreviewActive: state.map.isPreviewActive,
  previewedPlace: state.map.previewedPlace,
  overviewPins: state.map.overviewPins
})

const mapDispatchToProps = dispatch => ({
  placePreview: (id) => dispatch(previewPlace(id)),
  previewClose: () => dispatch(closePreview())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeMap);
