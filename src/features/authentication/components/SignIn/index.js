import React from "react";
import { View } from "react-native";

import PageView from "../../../../components/PageView";
import Logo from "../../../../components/Logo";
import { AuthenticationView, AuthenticationInput, AuthenticationButton, AuthenticationFooter } from '../helpers'

const SignIn = ({ navigation }) => {
  return (
    <PageView>
      <AuthenticationView>
        <Logo />
        <View style={{
          width: '80%'
        }}>
          <AuthenticationInput placeholder="Login" />
          <AuthenticationInput placeholder="Password" />
          <AuthenticationButton title='Sign in' />
          <AuthenticationFooter label="Don't have an account yet?"
                                title='Sign up'
                                onPress={() => {navigation.navigate('SignUp')}} />
        </View>
      </AuthenticationView>
    </PageView>
  );
}

export default SignIn;
