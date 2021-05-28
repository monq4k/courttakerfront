import { createAction } from 'redux-actions';

import FetchApi from '../../services/FetchApi';

import * as actionTypes from './actionTypes';
import { ROUTES } from '../../constants';

import { changeLoaderState } from '../spinner/actions';

export const loginRequestSuccess = createAction(
  actionTypes.LOGIN_REQUEST_SUCCESS,
);

export const signUpRequestSuccess = createAction(
  actionTypes.SIGNUP_REQUEST_SUCCESS,
);

export const logoutSuccess = createAction(
  actionTypes.LOGOUT,
);

export const changeRememberMeSuccess = createAction(
  actionTypes.CHANGE_REMEMBER_ME,
);

export const loginRequest = ({email, password}) => async (
  dispatch,
) => {
  try {
    dispatch(changeLoaderState(true));
    const response = await FetchApi.post(`/user${ROUTES.LOGIN}`, {email, password});
    const { data } = response;
    localStorage.setItem('token', data.token);
    dispatch(loginRequestSuccess({
      id: data.id
    }));
    dispatch(changeLoaderState(false));
  } catch (error) {
    console.log('error: ', error.message);
  }
};

export const signUpRequest = ({email, password, fullName}) => async (
  dispatch,
) => {
  try {
    dispatch(changeLoaderState(true));
    await FetchApi.post(`/user${ROUTES.SIGNUP}`, {email, password, fullName});
    dispatch(signUpRequestSuccess());
    dispatch(changeLoaderState(false));
  } catch (error) {
    console.log('error: ', error.message);
  }
};
