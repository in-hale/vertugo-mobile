import React from 'react';
import { connect } from "react-redux";
import PageView from "../../../../components/PageView";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import ImageSlider from "../ImageSlider";
import PlaceRating from "../PlaceRating";
import PressableIcon from "../../../../components/PressableIcon";
import { previewPlace } from "../../actions/map.actions";
import { List } from 'react-native-paper';
import Icon from "../../../../components/Icon";

const MenuSection = ({ children, title }) => (
  <List.Accordion style={styles.menuSection} title={title} titleStyle={styles.menuSectionTitle}>
    { children }
  </List.Accordion>
)

const MenuItem = ({ title, price, currency }) => (
  <List.Item title={title} style={styles.menuItem} right={() => <PriceTag amount={price} currency={currency} />} />
)

const PriceTag = ({ amount, currency }) => (
  <Text style={styles.priceTag}>
    {amount} {currency}
  </Text>
)

const ReviewItem = ({ userLogin, rating, text }) => (
  <View style={styles.reviewItem}>
    <Icon name='account-circle' size={60} />
    <View style={styles.reviewContent}>
      <View style={styles.reviewLoginAndRatingContainer}>
        <PlaceRating rating={rating} showCount={false} size={15} />
        <Text style={styles.reviewLogin}>{userLogin}</Text>
      </View>
      <View style={styles.reviewTextContainer}>
        <Text style={styles.reviewText}>
          { text }
        </Text>
      </View>
    </View>
  </View>
)

const PlaceView = ({ place, placePreview }) => {
  return (
    <PageView>
      <ScrollView>
        <ImageSlider images={place.images} style={{ height: 300 }} />
        <View style={styles.container}>
          <View style={styles.ratingAndActionsContainer}>
            <PlaceRating reviewCount={place.reviewCount} rating={place.rating} />
            <View style={styles.actions} >
              <PressableIcon name='phone' size={35} onPress={() => {alert('kek')}}  />
              <PressableIcon name='map-marker' size={35} onPress={() => { placePreview(place.id) }} color='red' />
            </View>
          </View>
          <View style={styles.pageSectionContainer}>
            <Text style={styles.pageSectionTitle}>Menu</Text>

            <MenuSection title="Pasta">
              <MenuItem title='First item' price={9} currency='BYN' />
              <MenuItem title='Second item' price={15} currency='BYN' />
            </MenuSection>

            <MenuSection title="Salads">
              <MenuItem title='First item' price={10} currency='BYN' />
              <MenuItem title='Second item' price={20.9} currency='BYN' />
            </MenuSection>
          </View>
          <View style={{ ...styles.pageSectionContainer, borderBottomWidth: 0 }}>
            <Text style={styles.pageSectionTitle}>Reviews</Text>

            <View style={styles.reviewsContainer}>
              <ReviewItem rating={4} userLogin='User Login' text='Great! Will never go there again' />
              <ReviewItem rating={2.5} userLogin='terminator2005' text='Bullshit! Liked it' />
              <ReviewItem rating={2.5} userLogin='terminator2005' text='Bullshit! Liked it' />
              <ReviewItem rating={2.5} userLogin='terminator2005' text='Bullshit! Liked it' />
              <ReviewItem rating={2.5} userLogin='terminator2005' text='Bullshit! Liked it' />
              <ReviewItem rating={2.5} userLogin='terminator2005' text='Bullshit! Liked it' />

            </View>
          </View>
        </View>
      </ScrollView>
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
  pageSectionTitle: {
    fontSize: 25,
    fontWeight: '600',
    marginLeft: 10,
    paddingBottom: 10
  },
  menuSection: {
    paddingLeft: 3,
    borderTopWidth: 1,
  },
  menuSectionTitle: {
    color: 'black'
  },
  menuItem: {
    paddingLeft: 15,
    padding: 3,
    alignItems: 'center'
  },
  priceTag: {
    marginRight: 10,
    marginTop: 6
  },
  reviewsContainer: {
    marginLeft: 5,
  },
  reviewItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  reviewContent: {
    paddingLeft: 5,
    flexGrow: 1,
  },
  reviewLoginAndRatingContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 2,
  },
  reviewLogin: {
    top: 2,
    paddingLeft: 5,
    fontWeight: '600'
  },
  reviewTextContainer: {
    marginRight: 60,
    justifyContent: 'center',
    flexGrow: 1
  },
  reviewText: {
  }
});

const mapStateToProps = state => ({
  place: state.map.viewedPlace
})

const mapDispatchToProps = dispatch => ({
  placePreview: (id) => dispatch(previewPlace(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaceView);
