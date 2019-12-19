import { createSelector } from 'reselect';

const selectUser = state => state.auth;

export const selectCurrentUser = createSelector(
  [selectUser],
  auth => auth.user
);

export const selectUserLoading = createSelector(
  [selectUser],
  auth => auth.loading
);

export const selectIsAuthenticated = createSelector(
  [selectUser],
  auth => auth.isAuthenticated
);
