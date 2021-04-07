import React, {useState} from 'react';
import { connect } from "react-redux";
import {ScrollView, StyleSheet, Text, View, Linking} from "react-native";

import PageView from "../../../../components/PageView";
import ImageSlider from "../ImageSlider";
import PlaceRating from "../PlaceRating";
import PressableIcon from "../../../../components/PressableIcon";
import { previewPlace } from "../../actions/map.actions";
import Button from "../../../../components/Button";
import CategorizedMenuItems from "../CategorizedMenuItems";
import Reviews from "../Reviews";
import AddReviewModal from "../AddReviewModal";


const PlaceView = ({ place, placePreview }) => {
  const [isAddReviewModalVisible, setAddReviewModalVisibility] = useState(false);

  return (
    <PageView>
      <ScrollView>
        <ImageSlider imageUrls={place.imageUrls} style={{ height: 300 }} />
        <View style={styles.container}>
          <View style={styles.ratingAndActionsContainer}>
            <PlaceRating reviewsCount={place.reviewsCount} rating={place.rating} />
            <View style={styles.actions} >
              {place.telephoneNumber
                  ? <PressableIcon name='phone' size={35} onPress={() => { Linking.openURL(`tel:${place.telephoneNumber}`) }}  />
                  : null}
              <PressableIcon name='map-marker' size={35} onPress={() => { placePreview(place.id) }} color='red' />
            </View>
          </View>
          <View style={styles.pageSectionContainer}>
            <View style={styles.pageSectionTitleContainer}>
              <Text style={styles.pageSectionTitle}>Menu</Text>
            </View>

            <CategorizedMenuItems categories={place.mealCategories} />
          </View>
          <View style={{ ...styles.pageSectionContainer, borderBottomWidth: 0 }}>
            <View style={styles.pageSectionTitleContainer}>
              <Text style={styles.pageSectionTitle}>Reviews</Text>
              <Button style={{
                marginLeft: 10,
              }} title='Add' size={10} onPress={() => { setAddReviewModalVisibility(true) }} />
            </View>

            <Reviews reviews={place.reviews} />
          </View>
        </View>
      </ScrollView>
      <AddReviewModal onRequestClose={() => setAddReviewModalVisibility(false)} visible={isAddReviewModalVisible} />
    </PageView>
  );
}

const styles = StyleSheet.create({
  container: {
    // margin: 10
  },
  ratingAndActionsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10
  },
  actions: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  pageSectionContainer: {
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  pageSectionTitleContainer: {
    marginLeft: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  pageSectionTitle: {
    fontSize: 25,
    fontWeight: '600',
  }
});

const mapStateToProps = state => ({
  place: state.map.viewedPlace
})

const mapDispatchToProps = dispatch => ({
  placePreview: (id) => dispatch(previewPlace(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaceView);
