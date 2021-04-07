import PropTypes from 'prop-types';
import React from 'react';
import { connect } from "react-redux";
import { Text, TouchableOpacity, View, Alert } from 'react-native';
import Logo from "../../../../components/Logo";
import SideMenuUserInfo from "../SideMenuUserInfo";
import PageView from "../../../../components/PageView";
import { Icon } from "react-native-elements";
import { userLogout } from "../../../authentication/actions/authentication.actions";
import { closePreview } from "../../actions/map.actions";

const MenuItem = ({ title, icon, style, onPress }) => {
  return (
    <TouchableOpacity style={{ ...styles.menuItem, ...style }} onPress={onPress}>
      <Icon name={icon} type='material-community' size={35} />
      <Text style={styles.menuItemText}>{title}</Text>
    </TouchableOpacity>
  )
}

const LogOutButtonComponent = ({ logoutUser }) => {
  const showLogOutAlert = () => (
    Alert.alert(
      'Are you sure?',
      'You will be logged out from your account',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: "OK", onPress: logoutUser }
      ]
    )
  )

  return <MenuItem title='Log out' style={{
    position: 'absolute',
    bottom: 20
  }} icon='logout' onPress={showLogOutAlert} />
}

const mapDispatchToProps = dispatch => ({
  logoutUser: () => {
    dispatch(userLogout())
    dispatch(closePreview())
  }
})

const LogOutButton = connect(null, mapDispatchToProps)(LogOutButtonComponent)

const SideMenu = ({ navigation }) => {
  const navigate = screen => {
    navigation.navigate(screen);
    navigation.closeDrawer();
  }

  return (
    <PageView>
      <View style={styles.container}>
        <Logo style={{ alignSelf: 'center', marginTop: 15 }} />

        <SideMenuUserInfo />

        <View style={styles.menuView}>
          <MenuItem title='Filters' icon='filter' onPress={() => { navigate('Filters') } } />
          <MenuItem title='Favourites' icon='heart' onPress={() => { navigate('Favourites') } } />
          <LogOutButton />
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