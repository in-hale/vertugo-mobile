import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import { viewPlace } from "../../actions/map.actions";

const AdContent = ({ text, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.adsContainer}>
      <Text style={styles.text}>{ text }</Text>
    </View>
  </TouchableWithoutFeedback>
)

const AdPanel = ({ currentAd, placeView }) => (
  (currentAd || null) && <AdContent text={currentAd.text} onPress={() => placeView(currentAd.place.id)} />
)

const styles = StyleSheet.create({
  adsContainer: {
    height: 80,
    borderTopWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange'
  },
  text: {
    fontSize: 30,
    color: 'black',
    // textShadowColor: 'white',
    // textShadowOffset: {width: -1, height: 1},
    // textShadowRadius: 1
  }
});

AdPanel.propTypes = {
  currentAd: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    place: PropTypes.shape({
      id: PropTypes.string
    })
  })
}
//
// AdPanel.defaultProps = {
//   currentAd: {
//     id: null,
//     text: 'keasdgk',
//     place: {
//       id: 39
//     }
//   }
// }

const mapStateToProps = state => ({
  currentAd: state.map.currentAd
})

const mapDispatchToProps = dispatch => ({
  placeView: (id) => dispatch(viewPlace(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(AdPanel);
