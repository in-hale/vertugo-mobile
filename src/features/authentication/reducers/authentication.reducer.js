import { USER_SIGN_OUT, USER_APPLY, ADD_AUTH_ERROR } from '../actions/authentication.actions'

const initialState = {
  active: false,
}

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
    case ADD_AUTH_ERROR: {
      const { error } = action.payload
      return {
        error
      }
    }
    default: {
      return state;
    }
  }
}

export default authReducer;
