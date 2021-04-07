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

const SignIn = ({ navigation, loginUser, errors = [] }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <PageView>
      <AuthenticationView>
        <Logo style={{ paddingBottom: 50 }} />
        <View style={{ width: '80%' }}>
          <AuthenticationInput placeholder="Email" onChangeText={setEmail} value={email} />
          <AuthenticationPasswordInput placeholder="Password" onChangeText={setPassword} value={password} />
          {
            errors.map(error => <AuthenticationError title={error} />)
          }
          <AuthenticationButton title='Sign in' onPress={() => loginUser({ email, password })} />
          <AuthenticationFooter label="Don't have an account yet?"
                                title='Sign up'
                                onPress={() => {navigation.navigate('SignUp')}} />
        </View>
      </AuthenticationView>
    </PageView>
  );
}

const mapStateToProps = (state) => ({
  errors: state.authentication.signInErrors
})

const mapDispatchToProps = (dispatch) => ({
  loginUser: (credentials) => dispatch(userLogin(credentials)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
