import { handleActions } from 'redux-actions';

import {
  getProfileSuccess,
  bookCourtSuccess,
  cancelBookingCourtSuccess,
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
  bookedCourtes: [],
};

const userReducer = handleActions(
  {
    [getProfileSuccess]: (state, action) => ({
      ...state,
      user: {...state.user, ...action.payload.user},
    }),
    [bookCourtSuccess]: (state, action) => ({
      ...state,
      bookedCourtes: [...state.bookedCourtes, action.payload.book],
    }),
    [cancelBookingCourtSuccess]: (state, action) => ({
      ...state,
      bookedCourtes: state.bookedCourtes.filter((court) => !(court.idUser === action.payload.idUser && court.idCourt === action.payload.idCourt)),
    }),
  },
  initialState,
);

export default userReducer;
