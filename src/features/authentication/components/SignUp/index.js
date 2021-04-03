import React, {useState} from "react";
import { View } from "react-native";
import { connect } from 'react-redux'

import PageView from "../../../../components/PageView";
import Logo from "../../../../components/Logo";
import {
  AuthenticationView,
  AuthenticationInput,
  AuthenticationButton,
  AuthenticationFooter,
  AuthenticationPasswordInput, AuthenticationError
} from '../helpers'
import { userRegister } from "../../actions/authentication.actions";

const SignUp = ({ navigation, error, registerUser }) => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');

  return (
    <PageView>
      <AuthenticationView>
        <Logo style={{ paddingBottom: 50 }} />
        <View style={{ width: '80%' }}>
          <AuthenticationInput placeholder="Login" onChangeText={setLogin} value={login} />
          <AuthenticationInput placeholder="Email" onChangeText={setEmail} value={email} />
          <AuthenticationPasswordInput placeholder="Password" onChangeText={setPassword} value={password} />
          <AuthenticationPasswordInput placeholder="Repeat password" onChangeText={setRepeatedPassword} value={repeatedPassword} />
          <AuthenticationError title={error} />
          <AuthenticationButton title='Sign up' onPress={() => {
            registerUser({ login, email, password, repeatedPassword })
          }} />
          <AuthenticationFooter label="Already have an account?"
                                title='Sign in'
                                onPress={() => {navigation.navigate('SignIn')}} />
        </View>
      </AuthenticationView>
    </PageView>
  );
}

const mapStateToProps = (state) => ({
  error: state.authentication.signUpError
})

const mapDispatchToProps = (dispatch) => ({
  registerUser: (creds) => dispatch(userRegister(creds)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
