import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from './actionTypes.js'

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    creds
  };
}

function successLogin(creds) {
  return {
    type: LOGIN_SUCCESS,
    creds
  }
}

function logout() {
  return {
    type: LOGOUT_SUCCESS
  }
}

export function logUserIn(creds) {
  return dispatch => {
    dispatch(requestLogin(creds));
    setTimeout(() => {
      dispatch(successLogin({ ...creds, token: "aisjfbiajsd9" }));
    }, 3000);
  }
}

export function logUserOut() {
  return dispatch => {
    dispatch(logout());
  }
}