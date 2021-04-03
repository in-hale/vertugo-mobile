import React from 'react';
import { connect } from "react-redux";
import PageView from "../../../../components/PageView";
import {ScrollView, StyleSheet, View} from "react-native";
import ImageSlider from "../ImageSlider";
import PlaceRating from "../PlaceRating";

const PlaceView = ({ place }) => {
  return (
    <PageView>
      <ScrollView>
        <ImageSlider images={place.images} />
        <PlaceRating reviewCount={place.reviewCount} rating={place.rating} />
      </ScrollView>
    </PageView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const mapStateToProps = state => ({
  place: state.map.viewedPlace
})

export default connect(mapStateToProps)(PlaceView);
