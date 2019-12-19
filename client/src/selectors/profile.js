import { createSelector } from 'reselect';

const selectProfile = state => state.profile;

export const selectProfileData = createSelector(
  [selectProfile],
  profile => profile.profile
);
export const selectFieldErrors = createSelector(
  [selectProfile],
  profile => profile.field_errors
);

export const selectCurrentProfile = createSelector(
  [selectProfileData],
  profile => (profile ? Object.keys(profile).map(key => profile[key]) : [])
);

export const selectIsProfileLoaded = createSelector(
  [selectProfile],
  profile => profile.loading
);
