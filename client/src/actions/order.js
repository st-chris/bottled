import {
  GET_ORDERS_START,
  GET_ORDERS,
  GET_ORDERS_ERROR,
  CLEAR_ORDERS,
  // CREATE_ORDER_START,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL
} from './types';

export const getOrdersStart = () => ({
  type: GET_ORDERS_START
});

export const getOrders = orders => ({
  type: GET_ORDERS,
  payload: orders
});

export const getOrdersFailure = error => ({
  type: GET_ORDERS_ERROR,
  payload: { msg: error.response.statusText, status: error.response.status }
});

export const clearOrders = () => ({
  type: CLEAR_ORDERS
});

// Create order
// export const createOrderStart = (orderDetails, history) => ({
//   type: CREATE_ORDER_START,
//   payload: { orderDetails, history }
// });

export const createOrderSuccess = order => ({
  type: CREATE_ORDER_SUCCESS,
  payload: order
});

export const createOrderFailure = error => ({
  type: CREATE_ORDER_FAIL,
  payload: { msg: error.response.statusText, status: error.response.status }
});
