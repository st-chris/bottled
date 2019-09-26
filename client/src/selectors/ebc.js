import { createSelector } from 'reselect';

const selectEbc = state => state.ebc;

export const selectEbcCategories = createSelector(
  [selectEbc],
  ebc => ebc.ebc_categories
);
