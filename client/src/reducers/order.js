import {
  GET_ORDERS,
  GET_ORDERS_ERROR,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  CLEAR_ORDERS
} from '../actions/types';

const initialState = {
  orders: null,
  last_order: null,
  loading: true,
  error: {}
};

const orders = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: payload,
        loading: false
      };
    case GET_ORDERS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        last_order: payload,
        loading: false
      };
    case CREATE_ORDER_FAIL:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_ORDERS:
      return {
        ...state,
        orders: null,
        last_order: null,
        loading: false
      };
    default:
      return state;
  }
};

export default orders;
