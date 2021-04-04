import React, {useEffect} from 'react';
import { connect } from "react-redux";
import PageView from "../../../../components/PageView";
import {ScrollView, StyleSheet, Text, TouchableOpacity} from "react-native";
import PlaceRating from "../PlaceRating";
import {loadFavourites, viewPlace} from "../../actions/map.actions";

const Favourite = ({ place, onPress }) => {
  return <TouchableOpacity style={styles.item} onPress={onPress}>
    <Text style={styles.title}>{place.name}</Text>
    <PlaceRating rating={place.rating} reviewCount={place.reviewCount} />
  </TouchableOpacity>
}

const Favourites = ({ favouritesLoad, favourites = [], placeView }) => {
  useEffect(favouritesLoad, [])

  return (
    <PageView>
      <ScrollView>
        {favourites.map(fav =>
          <Favourite place={fav} key={fav.id} onPress={() => placeView(fav.id)} />
        )}
      </ScrollView>
    </PageView>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1
  },
  title: {
    fontSize: 20,
    fontWeight: '600'
  }
});

const mapStateToProps = state => ({
  favourites: state.map.favourites
})

const mapDispatchToProps = dispatch => ({
  favouritesLoad: () => dispatch(loadFavourites()),
  placeView: (id) => dispatch(viewPlace(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
