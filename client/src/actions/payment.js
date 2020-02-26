import { PAYMENT_START, PAYMENT_SUCCESS, PAYMENT_FAIL } from './types';

// Payment
export const paymentStart = (amount, token, history) => ({
  type: PAYMENT_START,
  payload: { amount, token, history }
});

export const paymentSuccess = (response, history) => ({
  type: PAYMENT_SUCCESS,
  payload: { response, history }
});

export const paymentFailure = error => ({
  type: PAYMENT_FAIL,
  payload: error
});
