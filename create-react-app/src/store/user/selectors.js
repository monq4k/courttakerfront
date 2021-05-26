import { createSelector } from 'reselect';

const userSelector = (state) => state.user;

export const userSelector = createSelector(
  [userSelector],
  (user) => user.user,
);