import axios from 'axios';

import { GET_PRODUCTS_START, GET_PRODUCTS, GET_PRODUCTS_ERROR } from './types';

export const getProductsStart = () => ({
  type: GET_PRODUCTS_START
});

// Get all products
export const getProductsAsync = () => async dispatch => {
  try {
    const res = await axios.get('/api/products/');

    const reducedData = res.data.reduce((acc, beerCat) => {
      acc[beerCat.routeName.toLowerCase()] = beerCat;
      return acc;
    }, {});

    dispatch({
      type: GET_PRODUCTS,
      payload: reducedData
    });
  } catch (err) {
    dispatch({
      type: GET_PRODUCTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
