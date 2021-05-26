import { handleActions } from 'redux-actions';

import {
  getProfileSuccess,
} from './actions';

const initialState = {
  user: {
    id: 0,
    password: "",
    email: "",
    image: {},
    fullName: "",
    hoursPlayed: 0,
    idTeam: null
  },
};

const userReducer = handleActions(
  {
    [getProfileSuccess]: (state, action) => ({
      ...state,
      user: {...state.user, ...action.payload.user},
    }),
  },
  initialState,
);

export default userReducer;
