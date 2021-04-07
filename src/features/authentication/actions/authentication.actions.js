import * as api from "../../../api/authentication";

export const USER_SIGN_OUT = 'USER_SIGN_OUT'
export const USER_APPLY = 'USER_APPLY'
export const SET_SIGN_IN_ERRORS = 'SET_SIGN_IN_ERRORS'
export const SET_SIGN_UP_ERRORS = 'SET_SIGN_UP_ERRORS'

export const userLogin = (credentials) => dispatch => {
  api.signInUser(credentials).then(
    result => {
      dispatch({
        type: USER_APPLY,
        payload: result.data.signInUser
      })
    },
    errorData => {
      dispatch({
        type: SET_SIGN_IN_ERRORS,
        payload: {
          errors: errorData.graphQLErrors.map(error => error.message)
        }
      })
    }
  )
}

export const userLogout = () => ({
  type: USER_SIGN_OUT,
  payload: {},
})

export const userRegister = (creds) => dispatch => {
  if (creds.login == 'kek' && creds.password == 'lol') {
    dispatch({
      type: USER_APPLY,
      payload: {
        login: creds.login,
        email: creds.email
      }
    })
  } else {
    dispatch({
      type: SET_SIGN_UP_ERRORS,
      payload: {
        error: 'Incorrect credentials / user already exists'
      }
    })
  }
}
