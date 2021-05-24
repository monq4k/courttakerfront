import { createAction } from 'redux-actions';

import FetchApi from '../../services/FetchApi';

import * as actionTypes from './actionTypes';
import { ROUTES } from '../../constants';

export const loginRequestSuccess = createAction(
  actionTypes.LOGIN_REQUEST_SUCCESS,
);

export const loginRequest = () => async (
  dispatch,
) => {
  try {
    const response = await FetchApi.post(`${ROUTES.LOGIN}`);
    const { data } = response;
    dispatch(loginRequestSuccess({
      id: data.id
    }));
  } catch (error) {
    console.log('error: ', error.message);
  }
};
