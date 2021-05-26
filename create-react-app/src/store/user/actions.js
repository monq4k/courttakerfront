import { createAction } from 'redux-actions';

import FetchApi from '../../services/FetchApi';

import * as actionTypes from './actionTypes';
import { ROUTES } from '../../constants';

import { changeLoaderState } from '../spinner/actions';

export const getProfileSuccess = createAction(
  actionTypes.GET_PROFILE,
);

export const getProfileRequest = () => async (
  dispatch, getState
) => {
  try {
    dispatch(changeLoaderState(true));
    console.log('state: ', getState());
    const response = await FetchApi.get(`${ROUTES.PROFILE}/${getState().login.id}`);
    const { data } = response;
    dispatch(getProfileSuccess({user: data.user}));
    dispatch(changeLoaderState(false));
  } catch (error) {
    console.log('error: ', error.message);
  }
};
