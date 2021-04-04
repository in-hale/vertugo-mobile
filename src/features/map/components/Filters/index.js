import React from 'react';
import { connect } from "react-redux";
import PageView from "../../../../components/PageView";
import Logo from "../../../../components/Logo"
import {StyleSheet, Text, TextInput, View} from "react-native";
import {Rating} from "react-native-elements";
import { addOrUpdateFilter } from "../../actions/map.actions";

const FilterInputContainer = ({ label, children }) => {
  return <View >
    <Text style={styles.filterInputLabel}>{label}</Text>
    <View style={styles.filterInputContainer}>
      { children }
    </View>
  </View>
}

const Filters = ({ filters, updateFilter }) => {
  return (
    <PageView style={styles.container}>
      <FilterInputContainer label='Menu element'>
        <TextInput style={styles.filterTextInput} value={filters.menuElement} onChangeText={val => updateFilter('menuElement', val)} />
      </FilterInputContainer>
      <FilterInputContainer label='MIN Rating'>
        <Rating startingValue={filters.minRating} onFinishRating={r => {updateFilter('minRating', Math.round(r))}} imageSize={30} />
      </FilterInputContainer>
    </PageView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  filterInputContainer: {
    paddingBottom: 20,
    alignItems: 'flex-start'
  },
  filterInputLabel: {
    fontSize: 15,
    paddingBottom: 10,
  },
  filterTextInput: {
    fontSize: 25,
    borderBottomWidth: 1,
    width: '100%'
  },
  filterRating: {
    alignSelf: 'flex-start'
  }
});

const mapStateToProps = state => ({
  filters: state.map.filters
})

const mapDispatchToProps = dispatch => ({
  updateFilter: (name, value) => dispatch(addOrUpdateFilter({ name, value }))
})


export default connect(mapStateToProps, mapDispatchToProps)(Filters);
