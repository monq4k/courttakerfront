import { handleActions } from 'redux-actions';

import { fetchProductsFailed } from './actions';

const initialState = {
  statusLoad: '',
};

const errorsReducer = handleActions(
  {
    [fetchProductsFailed]: (state, action) => ({
      ...state,
      statusLoad: action.payload.error,
    }),
  },
  initialState,
);

export default errorsReducer;
