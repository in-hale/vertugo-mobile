import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet, Text, TextInput, View,
} from 'react-native';
import { Rating } from 'react-native-elements';
import PageView from '../../../../components/PageView';
import { setFilters } from '../../actions/map.actions';
import Button from '../../../../components/Button';

const FilterInputContainer = ({ label, children }) => (
  <View>
    <Text style={styles.filterInputLabel}>{label}</Text>
    <View style={styles.filterInputContainer}>
      { children }
    </View>
  </View>
);

const Filters = ({ filtersSet, filters, navigation }) => {
  const findFilterValueByName = (array, name, fallback) => {
    const filter = array.find((el) => el.name == name);

    return filter ? filter.value : fallback;
  };

  const [mealsContainFilter, setMealsContainFilter] = useState(findFilterValueByName(filters, 'mealsContain', ''));
  const [minRatingFilter, setMinRatingFilter] = useState(findFilterValueByName(filters, 'minRating', 0));

  return (
    <PageView style={styles.container}>
      <FilterInputContainer label="Meals contain">
        <TextInput style={styles.filterTextInput} value={mealsContainFilter} onChangeText={setMealsContainFilter} />
      </FilterInputContainer>
      <FilterInputContainer label="MIN Rating">
        <Rating startingValue={minRatingFilter} onFinishRating={(r) => { setMinRatingFilter(Math.round(r)); }} imageSize={30} />
      </FilterInputContainer>

      <Button
        title="Save"
        onPress={() => {
          filtersSet([
            {
              name: 'mealsContain',
              value: mealsContainFilter,
            },
            {
              name: 'minRating',
              value: minRatingFilter,
            },
          ]);
          navigation.navigate('HomeMap');
        }}
      />
    </PageView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  filterInputContainer: {
    paddingBottom: 20,
    alignItems: 'flex-start',
  },
  filterInputLabel: {
    fontSize: 15,
    paddingBottom: 10,
  },
  filterTextInput: {
    fontSize: 25,
    borderBottomWidth: 1,
    width: '100%',
  },
  filterRating: {
    alignSelf: 'flex-start',
  },
});

const mapStateToProps = (state) => ({
  filters: state.map.filters,
});

const mapDispatchToProps = (dispatch) => ({
  filtersSet: (filters) => dispatch(setFilters(filters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
