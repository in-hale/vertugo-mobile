import { USER_SIGN_OUT, USER_APPLY, ADD_SIGN_IN_ERROR, ADD_SIGN_UP_ERROR } from '../actions/authentication.actions'

const initialState = {}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_APPLY: {
      const { login, email } = action.payload
      return {
        active: true,
        login,
        email
      }
    }
    case USER_SIGN_OUT: {
      return {
        active: false,
      }
    }
    case ADD_SIGN_IN_ERROR: {
      return {
        signInError: action.payload.error
      }
    }
    case ADD_SIGN_UP_ERROR: {
      return {
        signUpError: action.payload.error
      }
    }
    default: {
      return state;
    }
  }
}

export default authReducer;
