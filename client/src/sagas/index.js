import { all, call } from 'redux-saga/effects';

import { beerSagas } from './beers';
import { authSagas } from './auth';
import { cartSagas } from './cart';

export default function* rootSaga() {
  yield all([call(beerSagas), call(authSagas), call(cartSagas)]);
}
