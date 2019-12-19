import {
  GET_PROFILE_START,
  GET_PROFILE,
  GET_PROFILE_ERROR,
  CLEAR_PROFILE,
  CREATE_PROFILE_START,
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_ERRORS,
  CREATE_PROFILE_FAIL
} from './types';

export const getProfileStart = () => ({
  type: GET_PROFILE_START
});

export const getProfile = profile => ({
  type: GET_PROFILE,
  payload: profile
});

export const getProfileFailure = error => ({
  type: GET_PROFILE_ERROR,
  payload: { msg: error.response.statusText, status: error.response.status }
});

export const clearProfile = () => ({
  type: CLEAR_PROFILE
});

// Create/edit profile
export const createProfileStart = (profileDetails, history) => ({
  type: CREATE_PROFILE_START,
  payload: { profileDetails, history }
});

export const createProfileSuccess = profile => ({
  type: CREATE_PROFILE_SUCCESS,
  payload: profile
});

export const createProfileErrors = errors => ({
  type: CREATE_PROFILE_ERRORS,
  payload: errors
});

export const createProfileFailure = error => ({
  type: CREATE_PROFILE_FAIL,
  payload: { msg: error.response.statusText, status: error.response.status }
});
