import { handleActions } from 'redux-actions';

import { fetchOrdersSuccess } from './actions';

const initialState = {
  list: [],
};

const orderListReducer = handleActions(
  {
    [fetchOrdersSuccess]: (state, action) => ({
      ...state,
      list: [...action.payload],
    }),
  },
  initialState,
);

export default orderListReducer;
