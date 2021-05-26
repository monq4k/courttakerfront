import { handleActions } from 'redux-actions';

import {
  setLoading
} from './actions';

const initialState = {
  isLoading: false,
};

const loadingReducer = handleActions(
  {
    [setLoading]: (state, action) => ({
      ...state,
      isLoading: action.payload.isLoading,
    }),
  },
  initialState,
);

export default loadingReducer;
