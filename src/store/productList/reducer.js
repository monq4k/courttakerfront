import { handleActions } from 'redux-actions';

import {
  fetchProductsSuccess,
  addOrRemoveFromFavorite,
} from './actions';

const initialState = {
  products: {
    list: [],
    totalCount: 0,
  },
  favorite: [],
};

const productListReducer = handleActions(
  {
    [fetchProductsSuccess]: (state, action) => ({
      ...state,
      products: {
        list: action.payload.page !== 1
          ? [...state.products.list, ...action.payload.products]
          : [...action.payload.products],
        totalCount:
          state.products.totalCount !== action.payload.totalCount
            ? action.payload.totalCount
            : state.products.totalCount,
      },
    }),
    [addOrRemoveFromFavorite]: (state, action) => ({
      ...state,
      favorite: state.favorite.find((product) => product.id === action.payload.id)
        ? state.favorite.filter((product) => product.id !== action.payload.id)
        : [...state.favorite, action.payload],
    }),
  },
  initialState,
);

export default productListReducer;
