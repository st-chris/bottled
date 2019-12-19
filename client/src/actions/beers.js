import { GET_PRODUCTS_START, GET_PRODUCTS, GET_PRODUCTS_ERROR } from './types';

export const getProductsStart = () => ({
  type: GET_PRODUCTS_START
});

export const getProducts = products => ({
  type: GET_PRODUCTS,
  payload: products
});

export const getProductsFailure = error => ({
  type: GET_PRODUCTS_ERROR,
  payload: { msg: error.response.statusText, status: error.response.status }
});
