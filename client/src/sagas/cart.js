import { all, call, takeLatest, put } from 'redux-saga/effects';
import { LOGOUT_SUCCESS, PAYMENT_SUCCESS } from '../actions/types';
import { clearCart } from '../actions/cart';

export function* clearCartOnLogout() {
  yield put(clearCart());
}

export function* onLogoutSuccess() {
  yield takeLatest(LOGOUT_SUCCESS, clearCartOnLogout);
}

export function* onPaymentSuccess() {
  yield takeLatest(PAYMENT_SUCCESS, clearCartOnLogout);
}

export function* cartSagas() {
  yield all([call(onLogoutSuccess), call(onPaymentSuccess)]);
}
