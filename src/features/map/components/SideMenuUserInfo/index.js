import {Text, View, StyleSheet} from "react-native";
import {Icon} from "react-native-elements";
import React from "react";
import {connect} from "react-redux";

const SideMenuUserInfo = ({ login, email }) => (
  <View style={styles.container}>
    <View style={styles.userIconContainer}>
      <Icon name='account-circle' type='material-community' size={55} />
      <View style={styles.loginContainer}>
        <Text style={styles.text}>{login}</Text>
      </View>
    </View>
    <Text style={styles.text}>{email}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 20,
    width: '100%',
    alignItems: 'flex-start',
  },
  userIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
  },
  loginContainer: {
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 17,
    paddingLeft: 7,
  }
})

const mapStateToProps = state => ({
  login: state.authentication.login,
  email: state.authentication.email
})


export default connect(mapStateToProps)(SideMenuUserInfo);
