import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';

import {
  GET_PROFILE_START,
  LOGOUT_SUCCESS,
  CREATE_PROFILE_START
} from '../actions/types';
import {
  getProfile,
  getProfileFailure,
  clearProfile,
  createProfileSuccess,
  createProfileFailure,
  createProfileErrors
} from '../actions/profile';

export function* getProfileAsync() {
  try {
    const res = yield axios.get('/api/profile/');

    yield put(getProfile(res.data));
  } catch (err) {
    yield put(getProfileFailure(err));
  }
}

export function* createProfile({ payload: { profileDetails, history } }) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = yield axios.post('/api/profile', profileDetails, config);
    yield put(createProfileSuccess(res.data));
    history.push('/account');
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach(error => console.log(error, 'danger'));
      yield put(createProfileErrors(errors));
    }

    yield put(createProfileFailure(error));
  }
}

export function* getProfileStart() {
  yield takeLatest(GET_PROFILE_START, getProfileAsync);
}

export function* clearProfileOnLogout() {
  yield put(clearProfile());
}

export function* onLogoutSuccess() {
  yield takeLatest(LOGOUT_SUCCESS, clearProfileOnLogout);
}

export function* onCreateProfileStart() {
  yield takeLatest(CREATE_PROFILE_START, createProfile);
}

export function* profileSagas() {
  yield all([
    call(getProfileStart),
    call(onCreateProfileStart),
    call(onLogoutSuccess)
  ]);
}
