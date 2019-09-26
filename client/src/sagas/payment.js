import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';
import { PAYMENT_START } from '../actions/types';
import { paymentFailure, paymentSuccess } from '../actions/payment';

export function* payment({ payload: { amount, token } }) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ amount, token });
  console.log(body);
  try {
    console.log('komt ie');
    const res = yield axios.post('/api/payment', body, config);
    console.log('komt ie 2', res.data);
    yield put(paymentSuccess(res.data));
  } catch (error) {
    yield put(paymentFailure(error));
  }
}

export function* onPaymentStart() {
  yield takeLatest(PAYMENT_START, payment);
}

export function* paymentSagas() {
  yield all([call(onPaymentStart)]);
}
