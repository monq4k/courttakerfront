import { createAction } from 'redux-actions';

import * as actionTypes from './actionTypes';

export const setLoading = createAction(
  actionTypes.SET_LOADING,
);

export const changeLoaderState = (isLoading) => async (dispatch) => {
  console.log('dispatch: ', isLoading)
  dispatch(setLoading({isLoading}));
};
