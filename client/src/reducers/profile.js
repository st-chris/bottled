import {
  GET_PROFILE,
  GET_PROFILE_ERROR,
  CLEAR_PROFILE,
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_FAIL,
  CREATE_PROFILE_ERRORS
} from '../actions/types';

const initialState = {
  profile: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case GET_PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CREATE_PROFILE_SUCCESS:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case CREATE_PROFILE_ERRORS:
      return {
        ...state,
        field_errors: payload,
        loading: false
      };
    case CREATE_PROFILE_FAIL:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        loading: false
      };
    default:
      return state;
  }
}
