import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  DECREASE_ITEM_AMOUNT,
  CLEAR_CART
} from './types';

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: REMOVE_ITEM,
  payload: item
});

export const decrItemAmount = item => ({
  type: DECREASE_ITEM_AMOUNT,
  payload: item
});

export const clearCart = () => ({
  type: CLEAR_CART
});
