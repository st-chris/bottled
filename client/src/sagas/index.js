import { all, call } from 'redux-saga/effects';

import { beerSagas } from './beers';
import { authSagas } from './auth';
import { cartSagas } from './cart';
import { paymentSagas } from './payment';

export default function* rootSaga() {
  yield all([
    call(beerSagas),
    call(authSagas),
    call(cartSagas),
    call(paymentSagas)
  ]);
}
