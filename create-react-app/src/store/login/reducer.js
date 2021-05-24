import { handleActions } from 'redux-actions';

import {
  loginRequestSuccess,
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
  },
  initialState,
);

export default loginReducer;
