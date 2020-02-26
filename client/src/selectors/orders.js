import { createSelector } from 'reselect';

const selectOrderState = state => state.orders;

export const selectOrders = createSelector(
  [selectOrderState],
  orders => orders.orders
);

export const selectOrdersLoading = createSelector(
  [selectOrderState],
  orders => orders.loading
);
