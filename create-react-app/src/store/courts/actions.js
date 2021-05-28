import { createAction } from 'redux-actions';

import FetchApi from '../../services/FetchApi';

import * as actionTypes from './actionTypes';
import { ROUTES } from '../../constants';

import { changeLoaderState } from '../spinner/actions';

export const fetchCourtsSuccess = createAction(
  actionTypes.FETCH_COURTS_SUCCESS,
);

export const fetchOneCourtSuccess = createAction(
  actionTypes.GET_ONE_COURT_INFO_SUCCESS,
);

export const requestAllCourts = () => async (
  dispatch,
) => {
  try {
    dispatch(changeLoaderState(true));
    const response = await FetchApi.get(`${ROUTES.MAIN}`);
    dispatch(changeLoaderState(false));
    const { data } = response;
    dispatch(fetchCourtsSuccess(data));
  } catch (error) {
    console.log('error: ', error.message);
  }
};

export const getOneCourtRequest = (id) => async (
  dispatch,
) => {
  try {
    dispatch(changeLoaderState(true));
    const response = await FetchApi.get(`${ROUTES.MAIN}/${id}`);
    dispatch(changeLoaderState(false));
    const { data } = response;
    console.log(data);
    dispatch(fetchOneCourtSuccess({ court: data.companyRoom }));
  } catch (error) {
    console.log('error: ', error.message);
  }
};
