import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage'
import { USER_SIGN_OUT, USER_APPLY, SET_SIGN_IN_ERRORS, SET_SIGN_UP_ERRORS } from '../actions/authentication.actions'

const initialState = {}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_APPLY: {
      return {
        active: true,
        ...action.payload
      }
    }
    case USER_SIGN_OUT: {
      return {
        active: false,
      }
    }
    case SET_SIGN_IN_ERRORS: {
      return {
        signInErrors: action.payload.errors
      }
    }
    case SET_SIGN_UP_ERRORS: {
      return {
        signUpErrors: action.payload.errors
      }
    }
    default: {
      return state;
    }
  }
}

const persistConfig = {
  key: 'authentication',
  storage: AsyncStorage,
  blacklist: [
    'signInErrors',
    'signUpErrors',
  ]
};

export default persistReducer(persistConfig, authReducer);
