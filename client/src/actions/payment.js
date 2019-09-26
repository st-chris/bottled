import { PAYMENT_START, PAYMENT_SUCCESS, PAYMENT_FAIL } from './types';

// Payment
export const paymentStart = (amount, token) => ({
  type: PAYMENT_START,
  payload: { amount, token }
});

export const paymentSuccess = response => ({
  type: PAYMENT_SUCCESS,
  payload: response
});

export const paymentFailure = error => ({
  type: PAYMENT_FAIL,
  payload: error
});
