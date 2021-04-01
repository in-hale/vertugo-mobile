export const USER_SIGN_OUT = 'USER_SIGN_OUT'
export const USER_APPLY = 'USER_APPLY'
export const ADD_AUTH_ERROR = 'ADD_AUTH_ERROR'

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
      type: ADD_AUTH_ERROR,
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
