import { all, call } from 'redux-saga/effects';

import { beerSagas } from './beers';
import { authSagas } from './auth';
import { cartSagas } from './cart';
import { paymentSagas } from './payment';
import { profileSagas } from './profile';
import { orderSagas } from './order';

export default function* rootSaga() {
  yield all([
    call(beerSagas),
    call(authSagas),
    call(profileSagas),
    call(cartSagas),
    call(paymentSagas),
    call(orderSagas)
  ]);
}
