import { handleActions } from 'redux-actions';

import {
  loginRequestSuccess,
  logoutSuccess,
  signUpRequestSuccess,
} from './actions';

const initialState = {
  id: 0,
  isLoged: false,
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
    }),
  },
  initialState,
);

export default loginReducer;
