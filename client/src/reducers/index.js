import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import auth from './auth';
import profile from './profile';
import cart from './cart';
import category from './category';
import beers from './beers';
import ebc from './ebc';
import orders from './order';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  auth,
  profile,
  cart,
  orders,
  category,
  ebc,
  beers
});

export default persistReducer(persistConfig, rootReducer);
