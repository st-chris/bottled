import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOGOUT_SUCCESS,
  PAYMENT_SUCCESS,
  GET_ORDERS_START
} from '../actions/types';
import {
  getOrdersFailure,
  getOrders,
  createOrderSuccess,
  createOrderFailure,
  clearOrders
} from '../actions/order';
import {
  selectCartItemsCount,
  selectCartTotal,
  selectCartItems
} from '../selectors/cart';

export function* getOrdersAsync() {
  try {
    const res = yield axios.get('/api/orders/');

    yield put(getOrders(res.data));
  } catch (err) {
    yield put(getOrdersFailure(err));
  }
}

export function* createOrder({ payload: { history } }) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const cartItems = yield select(selectCartItems);
  const quantity = yield select(selectCartItemsCount);
  const totalPrice = yield select(selectCartTotal);
  const orderDetails = {
    items: cartItems,
    totalQuantity: quantity,
    totalPrice: totalPrice
  };

  try {
    const res = yield axios.post('/api/orders', orderDetails, config);
    yield put(createOrderSuccess(res.data));
    history.push('/orders');
  } catch (error) {
    yield put(createOrderFailure(error));
  }
}

export function* clearOrdersOnLogout() {
  yield put(clearOrders());
}

export function* getOrdersStart() {
  yield takeLatest(GET_ORDERS_START, getOrdersAsync);
}

export function* onLogoutSuccess() {
  yield takeLatest(LOGOUT_SUCCESS, clearOrdersOnLogout);
}

export function* onPaymentSuccess() {
  yield takeLatest(PAYMENT_SUCCESS, createOrder);
}

export function* orderSagas() {
  yield all([
    call(getOrdersStart),
    call(onLogoutSuccess),
    call(onPaymentSuccess)
  ]);
}
