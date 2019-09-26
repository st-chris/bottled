import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOGIN_START,
  USER_LOADED_START,
  LOGOUT_START,
  REGISTER_START,
  REGISTER_SUCCESS
} from '../actions/types';
import {
  loginFailure,
  loginSuccess,
  userLoaded,
  authError,
  logoutSuccess,
  logoutFail,
  registerSuccess,
  registerFailure
} from '../actions/auth';
import setAuthToken from '../utils/setAuthToken';

export function* loadUser() {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = yield axios.get('/api/auth');
    yield put(userLoaded(res.data));
  } catch (error) {
    yield put(authError());
  }
}

export function* register({ payload: { name, email, password } }) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify(name, email, password);
  try {
    const res = yield axios.post('/api/users', body, config);
    yield put(registerSuccess(res.data));
  } catch (error) {
    yield put(registerFailure(error));
  }
}

export function* login({ payload: { email, password } }) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = yield axios.post('/api/auth', body, config);

    yield put(loginSuccess(res.data));

    yield call(loadUser);
  } catch (error) {
    yield put(loginFailure(error));
  }
}

export function* logout() {
  try {
    yield put(logoutSuccess());
  } catch (error) {
    yield put(logoutFail());
  }
}

export function* onRegisterStart() {
  yield takeLatest(REGISTER_START, register);
}

export function* onRegisterSuccess() {
  yield takeLatest(REGISTER_SUCCESS, loadUser);
}

export function* onLoginStart() {
  yield takeLatest(LOGIN_START, login);
}

export function* onLogoutStart() {
  yield takeLatest(LOGOUT_START, logout);
}

export function* onUserLoadedStart() {
  yield takeLatest(USER_LOADED_START, loadUser);
}

export function* authSagas() {
  yield all([
    call(onRegisterStart),
    call(onRegisterSuccess),
    call(onLoginStart),
    call(onUserLoadedStart),
    call(onLogoutStart)
  ]);
}
