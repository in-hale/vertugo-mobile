import React, { useState } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import PageView from '../../../../components/PageView';
import Logo from '../../../../components/Logo';
import {
  AuthenticationView,
  AuthenticationInput,
  AuthenticationButton,
  AuthenticationFooter,
  AuthenticationPasswordInput, AuthenticationErrors,
} from '../helpers';
import { userRegister } from '../../actions/authentication.actions';

const SignUp = ({ navigation, errors = [], registerUser }) => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');

  return (
    <PageView>
      <AuthenticationView>
        <Logo style={{ paddingBottom: 50 }} />
        <View style={{ width: '80%' }}>
          <AuthenticationInput placeholder="Email" onChangeText={setEmail} value={email} keyboardType="email-address" />
          <AuthenticationInput placeholder="Login" onChangeText={setLogin} value={login} />
          <AuthenticationPasswordInput placeholder="Password" onChangeText={setPassword} value={password} textContentType="newPassword" />
          <AuthenticationPasswordInput placeholder="Repeat password" onChangeText={setRepeatedPassword} value={repeatedPassword} textContentType="newPassword" />
          <AuthenticationErrors errors={errors} />
          <AuthenticationButton
            title="Sign up"
            onPress={() => {
              registerUser({
                login, email, password, repeatedPassword,
              });
            }}
          />
          <AuthenticationFooter
            label="Already have an account?"
            title="Sign in"
            onPress={() => { navigation.navigate('SignIn'); }}
          />
        </View>
      </AuthenticationView>
    </PageView>
  );
};

const mapStateToProps = (state) => ({
  errors: state.authentication.signUpErrors,
});

const mapDispatchToProps = (dispatch) => ({
  registerUser: (creds) => dispatch(userRegister(creds)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
