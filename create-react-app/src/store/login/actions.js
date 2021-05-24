import { createAction } from 'redux-actions';

import FetchApi from '../../services/FetchApi';

import * as actionTypes from './actionTypes';
import { ROUTES } from '../../constants';

export const loginRequestSuccess = createAction(
  actionTypes.LOGIN_REQUEST_SUCCESS,
);

export const signUpRequestSuccess = createAction(
  actionTypes.SIGNUP_REQUEST_SUCCESS,
);

export const logoutSuccess = createAction(
  actionTypes.LOGOUT,
);

export const loginRequest = ({email, password}) => async (
  dispatch,
) => {
  try {
    const response = await FetchApi.post(`/user${ROUTES.LOGIN}`, {email, password});
    const { data } = response;
    localStorage.setItem('token', data.token);
    dispatch(loginRequestSuccess({
      id: data.id
    }));
  } catch (error) {
    console.log('error: ', error.message);
  }
};

export const signUpRequest = ({email, password, fullName}) => async (
  dispatch,
) => {
  try {
    await FetchApi.post(`/user${ROUTES.SIGNUP}`, {email, password, fullName});
    dispatch(signUpRequestSuccess());
  } catch (error) {
    console.log('error: ', error.message);
  }
};
