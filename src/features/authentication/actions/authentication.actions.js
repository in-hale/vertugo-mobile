import AsyncStorage from '@react-native-community/async-storage';
import * as api from '../../../api/authentication';

export const USER_SIGN_OUT = 'USER_SIGN_OUT';
export const USER_APPLY = 'USER_APPLY';
export const SET_SIGN_IN_ERRORS = 'SET_SIGN_IN_ERRORS';
export const SET_SIGN_UP_ERRORS = 'SET_SIGN_UP_ERRORS';

export const userLogin = (credentials) => (dispatch) => {
  api.signInUser(credentials).then(
    (result) => {
      dispatch({
        type: USER_APPLY,
        payload: result.data.signInUser,
      });
      AsyncStorage.setItem('api_token', result.data.signInUser.token);
    },
    (errorData) => {
      dispatch({
        type: SET_SIGN_IN_ERRORS,
        payload: {
          errors: errorData.graphQLErrors.map((error) => error.message),
        },
      });
    },
  );
};

export const userLogout = () => ({
  type: USER_SIGN_OUT,
  payload: {},
});

export const userRegister = (credentials) => (dispatch) => {
  if (credentials.password != credentials.repeatedPassword) {
    dispatch({
      type: SET_SIGN_UP_ERRORS,
      payload: {
        errors: [
          'Passwords do not match',
        ],
      },
    });
    return;
  }

  const { repeatedPassword, ...credsForSignUp } = credentials;

  api.signUpUser(credsForSignUp).then(
    (result) => {
      dispatch({
        type: USER_APPLY,
        payload: result.data.signUpUser,
      });
      AsyncStorage.setItem('api_token', result.data.signUpUser.token);
    },
    (errorData) => {
      dispatch({
        type: SET_SIGN_UP_ERRORS,
        payload: {
          errors: errorData.graphQLErrors.map((error) => error.message),
        },
      });
    },
  );
};
