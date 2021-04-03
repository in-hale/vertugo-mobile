import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Logo from "../../../../components/Logo";
import SideMenuUserInfo from "../SideMenuUserInfo";
import PageView from "../../../../components/PageView";
import { Icon } from "react-native-elements";

const MenuItem = ({ title, icon, style, onPress }) => {
  return (
    <TouchableOpacity style={{ ...styles.menuItem, ...style }} onPress={onPress}>
      <Icon name={icon} type='material-community' size={35} />
      <Text style={styles.menuItemText}>{title}</Text>
    </TouchableOpacity>
  )
}

const SideMenu = ({ navigation }) => {
  return (
    <PageView>
      <View style={styles.container}>
        <Logo style={{ alignSelf: 'center', marginTop: 15 }} />

        <SideMenuUserInfo />

        <View style={styles.menuView}>
          <MenuItem title='Filters' icon='filter' onPress={() => { navigation.navigate('Filters') } } />
          <MenuItem title='Favourites' icon='heart' onPress={() => { navigation.navigate('Liked places') } } />
          <MenuItem title='Log out' style={{
            position: 'absolute',
            bottom: 20
          }} icon='logout' onPress={() => { navigation.navigate('Filters') } } />
        </View>
      </View>
    </PageView>
  );
}

const styles = {
  container: {
    paddingTop: 20,
    flex: 1,
    alignItems: 'flex-start',
    // margin: 10
  },
  menuView: {
    width: '100%',
    flexGrow: 1,
    marginTop: 35,
  },
  userIconContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuItem: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingLeft: 15,
    paddingBottom: 15,
  },
  menuItemText: {
    fontSize: 20,
    paddingLeft: 10,
    fontWeight: '600'
  }
};

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;