import React from "react";
import { View } from "react-native";

import PageView from "../../../../components/PageView";
import Logo from "../../../../components/Logo";
import {
  AuthenticationView,
  AuthenticationInput,
  AuthenticationButton,
  AuthenticationFooter,
  AuthenticationPasswordInput
} from '../helpers'

const SignUp = ({ navigation }) => {
  return (
    <PageView>
      <AuthenticationView>
        <Logo />
        <View style={{
          width: '80%'
        }}>
          <AuthenticationInput placeholder="Login" />
          <AuthenticationInput placeholder="Email" />
          <AuthenticationPasswordInput placeholder="Password" />
          <AuthenticationPasswordInput placeholder="Repeat password" />
          <AuthenticationButton title='Sign up' onPress={() => {}} />
          <AuthenticationFooter label="Already have an account?"
                                title='Sign in'
                                onPress={() => {navigation.navigate('SignIn')}} />
        </View>
      </AuthenticationView>
    </PageView>
  );
}

export default SignUp;
