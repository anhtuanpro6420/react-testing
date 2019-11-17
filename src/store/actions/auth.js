import axios from '../../axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = authData => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: authData
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('userId');
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime);
  };
};

export const auth = authData => {
  return dispatch => {
    dispatch(authStart());
    axios
      .post('/auth', authData)
      .then(response => {
        localStorage.setItem('token', response.data.token);
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn
        );
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        dispatch(authSuccess(response.data));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch(err => {
        dispatch(authFail(err.response.data.error));
      });
  };
};

export const setAuthRedirectPath = path => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        const user = JSON.parse(localStorage.getItem('user'));
        dispatch(authSuccess({ token, user }));
        dispatch(
          checkAuthTimeout(expirationDate.getTime() - new Date().getTime())
        );
      }
    }
  };
};
