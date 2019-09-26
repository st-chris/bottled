import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';

import {
  GET_PRODUCTS_START,
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR
} from '../actions/types';

export function* getProductsAsync() {
  try {
    const res = yield axios.get('/api/products/');

    const reducedData = res.data.reduce((acc, beerCat) => {
      acc[beerCat.routeName.toLowerCase()] = beerCat;
      return acc;
    }, {});

    yield put({
      type: GET_PRODUCTS,
      payload: reducedData
    });
  } catch (err) {
    yield put({
      type: GET_PRODUCTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

export function* getProductsStart() {
  yield takeLatest(GET_PRODUCTS_START, getProductsAsync);
}

export function* beerSagas() {
  yield all([call(getProductsStart)]);
}
