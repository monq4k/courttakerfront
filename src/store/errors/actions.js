import { createAction } from 'redux-actions';

import * as actionTypes from './actionTypes';

export const fetchProductsFailed = createAction(
  actionTypes.FETCH_PRODUCTS_FAILED,
);

export const requestAllProductsFailed = (error) => async (dispatch) => {
  dispatch(fetchProductsFailed({ error }));
};
