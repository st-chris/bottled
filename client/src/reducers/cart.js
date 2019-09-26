import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  DECREASE_ITEM_AMOUNT,
  CLEAR_CART
} from '../actions/types';
import { addItemToCart, decrItemAmount } from '../utils/cart';

const initialState = {
  hidden: true,
  cartItems: []
};

const cart = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload)
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item._id !== payload._id)
      };
    case DECREASE_ITEM_AMOUNT:
      return {
        ...state,
        cartItems: decrItemAmount(state.cartItems, payload)
      };
    case CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };
    default:
      return state;
  }
};

export default cart;
