import React from 'react';
import { connect } from "react-redux";
import PageView from "../../../../components/PageView";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import ImageSlider from "../ImageSlider";
import PlaceRating from "../PlaceRating";
import PressableIcon from "../../../../components/PressableIcon";
import { previewPlace } from "../../actions/map.actions";
import { List } from 'react-native-paper';

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
          <View style={styles.menuContainer}>
            <Text style={styles.menuTitle}>Menu</Text>

            <MenuSection title="Pasta">
              <MenuItem title='First item' price={9} currency='BYN' />
              <MenuItem title='Second item' price={15} currency='BYN' />
            </MenuSection>

            <MenuSection title="Salads">
              <MenuItem title='First item' price={10} currency='BYN' />
              <MenuItem title='Second item' price={20.9} currency='BYN' />
            </MenuSection>
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
  menuContainer: {
    borderBottomWidth: 1,
  },
  menuTitle: {
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
  }
});

const mapStateToProps = state => ({
  place: state.map.viewedPlace
})

const mapDispatchToProps = dispatch => ({
  placePreview: (id) => dispatch(previewPlace(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaceView);
