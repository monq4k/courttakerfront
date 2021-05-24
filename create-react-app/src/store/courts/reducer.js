import { handleActions } from 'redux-actions';

import {
  fetchCourtsSuccess,
} from './actions';

const initialState = {
  courts: [],
};

const courtListReducer = handleActions(
  {
    [fetchCourtsSuccess]: (state, action) => ({
      ...state,
      courts: [...action.payload.courts],
    }),
  },
  initialState,
);

export default courtListReducer;
