import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';

import { GET_PRODUCTS_START } from '../actions/types';
import { getProducts, getProductsFailure } from '../actions/beers';

export function* getProductsAsync() {
  try {
    const res = yield axios.get('/api/products/');

    const reducedData = res.data.reduce((acc, beerCat) => {
      acc[beerCat.routeName.toLowerCase()] = beerCat;
      return acc;
    }, {});

    yield put(getProducts(reducedData));
  } catch (err) {
    yield put(getProductsFailure(err));
  }
}

export function* getProductsStart() {
  yield takeLatest(GET_PRODUCTS_START, getProductsAsync);
}

export function* beerSagas() {
  yield all([call(getProductsStart)]);
}
