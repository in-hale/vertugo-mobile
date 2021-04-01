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
  AuthenticationError,
  AuthenticationPasswordInput
} from '../helpers'
import { userLogin } from '../../actions/authentication.actions'

const SignIn = ({ navigation, loginUser, error }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <PageView>
      <AuthenticationView>
        <Logo />
        <View style={{
          width: '80%'
        }}>
          <AuthenticationInput placeholder="Login" onChangeText={setLogin} value={login} />
          <AuthenticationPasswordInput placeholder="Password" onChangeText={setPassword} value={password} />
          <AuthenticationError title={error} />
          <AuthenticationButton title='Sign in' onPress={() => loginUser(login, password)} />
          <AuthenticationFooter label="Don't have an account yet?"
                                title='Sign up'
                                onPress={() => {navigation.navigate('SignUp')}} />
        </View>
      </AuthenticationView>
    </PageView>
  );
}

const mapStateToProps = (state) => ({
  error: state.authentication.error
})

const mapDispatchToProps = (dispatch) => ({
  loginUser: (login, password) => dispatch(userLogin(login, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
