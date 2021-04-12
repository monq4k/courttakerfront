import { createAction } from 'redux-actions';

import FetchApi from '../../services/FetchApi';

import * as actionTypes from './actionTypes';
import { ROUTES } from '../../constants';

export const fetchOrdersSuccess = createAction(
  actionTypes.FETCH_ORDERS_SUCCESS,
);

export const requestAllOrders = () => async (dispatch) => {
  try {
    const response = await FetchApi.get(`/api${ROUTES.ORDERS}`);
    const { data } = response;
    dispatch(fetchOrdersSuccess(data));
  } catch (error) {
    throw new Error(error.message);
  }
};
