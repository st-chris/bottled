import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED_START,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL
} from './types';

// Register user
export const registerStart = (name, email, password) => ({
  type: REGISTER_START,
  payload: { name, email, password }
});

export const registerSuccess = user => ({
  type: REGISTER_SUCCESS,
  payload: user
});

export const registerFailure = error => ({
  type: REGISTER_FAIL,
  payload: error
});

// Login user
export const loginStart = (email, password) => ({
  type: LOGIN_START,
  payload: { email, password }
});

export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: user
});

export const loginFailure = error => ({
  type: LOGIN_FAIL,
  payload: error
});

// Load user
export const userLoadedStart = () => ({
  type: USER_LOADED_START
});

export const userLoaded = user => ({
  type: USER_LOADED,
  payload: user
});

export const authError = () => ({
  type: AUTH_ERROR
});

// Logout user
export const logoutStart = () => ({
  type: LOGOUT_START
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
});

export const logoutFail = () => ({
  type: LOGOUT_FAIL
});
