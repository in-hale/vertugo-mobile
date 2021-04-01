import PageView from "../../../../components/PageView";
import { KeyboardAvoidingView, View } from "react-native";
import Logo from "../../../../components/Logo";
import React from "react";

import { AuthenticationInput, AuthenticationButton, AuthenticationFooter } from '../helpers'

const SignIn = ({ navigation }) => {
  return (
    <PageView>
      <KeyboardAvoidingView behavior='padding' style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
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
      </KeyboardAvoidingView>
    </PageView>
  );
}

export default SignIn;
