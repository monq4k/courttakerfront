import { handleActions } from 'redux-actions';

import {
  fetchCourtsSuccess,
  fetchOneCourtSuccess,
} from './actions';

const initialState = {
  courts: [],
  court: {
    id: 0,
    address: '',
    image: '',
    name: '',
    idCourtOwner: 0,
  },
};

const courtListReducer = handleActions(
  {
    [fetchCourtsSuccess]: (state, action) => ({
      ...state,
      courts: [...action.payload.courts],
    }),
    [fetchOneCourtSuccess]: (state, action) => ({
      ...state,
      court: {...state.court, ...action.payload.court},
    }),
  },
  initialState,
);

export default courtListReducer;
