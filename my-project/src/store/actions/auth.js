import axios from 'axios';
import {AUTH_SUCCESS, AUTH_LOGOUT} from './actionTypes';

export function auth(email, password, isLogin) {
  return async dispatch => {
    const authData = {
      email,
      password,
      returnSecureToken: true
    }

    let url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAh7UR-oy4ylHpon5xhaIobTlu7WaDSNX0";

    if(isLogin) {
      url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAh7UR-oy4ylHpon5xhaIobTlu7WaDSNX0";
    }

    const response = await axios.post(url, authData);
    console.log(response.data);
    const data = response.data;
    const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000);

    localStorage.setItem("token", data.idToken);
    localStorage.setItem("userId", data.localId);
    localStorage.setItem("expirationDate", data.expirationDate);

    dispatch(authSuccess(data.idToken));
    dispatch(autoLogout(data.expiresIn));
  }
}

export function logout(data) {
  localStorage.removeItem("token", data.idToken);
  localStorage.removeItem("userId", data.localId);
  localStorage.removeItem("expirationDate", data.expirationDate);
  return {
    type: AUTH_LOGOUT
  }
}

export function autoLogout(time) {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, time * 1000);
  }
}

export function authSuccess(token) {
  return {
    type: AUTH_SUCCESS,
    token
  }
}
