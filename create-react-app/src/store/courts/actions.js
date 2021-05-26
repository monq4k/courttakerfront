import { createAction } from 'redux-actions';

import FetchApi from '../../services/FetchApi';

import * as actionTypes from './actionTypes';
import { ROUTES } from '../../constants';

import { changeLoaderState } from '../spinner/actions';

export const fetchCourtsSuccess = createAction(
  actionTypes.FETCH_COURTS_SUCCESS,
);

export const requestAllCourts = () => async (
  dispatch,
) => {
  try {
    dispatch(changeLoaderState(true));
    const response = await FetchApi.get(`${ROUTES.MAIN}`);
    const { data } = response;
    dispatch(fetchCourtsSuccess(data));
    dispatch(changeLoaderState(false));
  } catch (error) {
    console.log('error: ', error.message);
  }
};
