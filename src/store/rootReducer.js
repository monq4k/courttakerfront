import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productListReducer from './productList/reducer';
import cartReducer from './cart/reducer';
import orderListReducer from './orders/reducer';
import errorsReducer from './errors/reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    shop: productListReducer,
    cart: cartReducer,
    orders: orderListReducer,
    errors: errorsReducer,
  }),
);

export default rootReducer;
