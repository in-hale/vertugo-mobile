import React from "react";
import PageView from "../../../../components/PageView";
import { KeyboardAvoidingView, View} from "react-native";
import Logo from "../../../../components/Logo";

import { AuthenticationInput, AuthenticationButton, AuthenticationFooter } from '../helpers'

const SignUp = ({ navigation }) => {
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
          <AuthenticationInput placeholder="Email" />
          <AuthenticationInput placeholder="Password" />
          <AuthenticationInput placeholder="Repeat password" />
          <AuthenticationButton title='Sign up' onPress={() => {}} />
          <AuthenticationFooter label="Already have an account?"
                                title='Sign in'
                                onPress={() => {navigation.navigate('SignIn')}} />
        </View>
      </KeyboardAvoidingView>
    </PageView>
  );
}

export default SignUp;
