import React from "react";
import { connect } from 'react-redux'
import { NavigationContainer } from "@react-navigation/native";

import AuthTabs from "./AuthTabs";
import AppTabs from "./AppTabs";

const Routes = ({ isAuthenticated }) => {
  return <NavigationContainer>
    { isAuthenticated ? <AppTabs /> : <AuthTabs /> }
  </NavigationContainer>
}

const mapStateToProps = state => ({
  isAuthenticated: state.authentication.active
})

export default connect(mapStateToProps)(Routes);
