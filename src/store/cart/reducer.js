import { handleActions } from 'redux-actions';

import { addOrRemoveFromCart, deleteAllProducts, createOrder } from './actions';

const initialState = {
  products: [],
  orders: [],
};

const cartReducer = handleActions(
  {
    [addOrRemoveFromCart]: (state, action) => ({
      ...state,
      products: state.products.find((product) => product.id === action.payload.id)
        ? state.products.filter((product) => product.id !== action.payload.id)
        : [...state.products, action.payload],
    }),
    [deleteAllProducts]: (state) => ({
      ...state,
      products: initialState.products,
    }),
    [createOrder]: (state, action) => ({
      ...state,
      orders: [...state.orders, action.payload.order],
    }),
  },
  initialState,
);

export default cartReducer;
