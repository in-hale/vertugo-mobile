import PropTypes from 'prop-types';
import React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import Logo from "../../../../components/Logo";

const SideMenu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Logo style={{ alignSelf: 'center', marginTop: 15 }} />

      <ScrollView>
        <Button title='Filters' onPress={() => { navigation.navigate('Filters') } } />
        <Button title='Liked places' onPress={() => { navigation.navigate('Liked places') } } />
      </ScrollView>
      <View style={styles.footerContainer}>
        <Text>Log out</Text>
      </View>
    </View>
  );
}

const styles = {
  container: {
    paddingTop: 20,
    flex: 1
  },
  navItemStyle: {
    padding: 10
  },
  navSectionStyle: {
    backgroundColor: 'lightgrey'
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey'
  }
};

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;