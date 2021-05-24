import { createAction } from 'redux-actions';

import FetchApi from '../../services/FetchApi';

import * as actionTypes from './actionTypes';
import { ROUTES } from '../../constants';

export const fetchCourtsSuccess = createAction(
  actionTypes.FETCH_COURTS_SUCCESS,
);

export const requestAllCourts = () => async (
  dispatch,
) => {
  try {
    const response = await FetchApi.get(`${ROUTES.MAIN}`);
    const { data } = response;
    dispatch(fetchCourtsSuccess(data));
  } catch (error) {
    console.log('error: ', error.message);
  }
};
