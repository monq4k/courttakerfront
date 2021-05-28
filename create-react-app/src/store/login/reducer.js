import { handleActions } from 'redux-actions';

import {
  loginRequestSuccess,
  logoutSuccess,
  signUpRequestSuccess,
  changeRememberMeSuccess,
} from './actions';

const initialState = {
  id: 0,
  isLoged: false,
  isRememberMe: false,
};

const loginReducer = handleActions(
  {
    [loginRequestSuccess]: (state, action) => ({
      ...state,
      id: action.payload.id,
      isLoged: true,
    }),
    [signUpRequestSuccess]: (state) => ({
      ...state,
    }),
    [logoutSuccess]: (state) => ({
      ...state,
      isLoged: false,
      isRememberMe: false,
    }),
    [changeRememberMeSuccess]: (state, action) => ({
      ...state,
      isRememberMe: action.payload,
    }),
  },
  initialState,
);

export default loginReducer;
