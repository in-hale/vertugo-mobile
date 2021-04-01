export const USER_SIGN_OUT = 'USER_SIGN_OUT'
export const USER_APPLY = 'USER_APPLY'
export const ADD_SIGN_IN_ERROR = 'ADD_SIGN_IN_ERROR'
export const ADD_SIGN_UP_ERROR = 'ADD_SIGN_UP_ERROR'

export const userLogin = (login, password) => dispatch => {
  if (login == 'kek' && password == 'lol') {
    dispatch({
      type: USER_APPLY,
      payload: {
        login,
        email: 'email@mail.com'
      }
    })
  } else {
    dispatch({
      type: ADD_SIGN_IN_ERROR,
      payload: {
        error: `Incorrect credentials / no such user (${login})`
      }
    })
  }
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
      type: ADD_SIGN_UP_ERROR,
      payload: {
        error: 'Incorrect credentials / user already exists'
      }
    })
  }
}
