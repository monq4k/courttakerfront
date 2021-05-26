import { createSelector } from 'reselect';

const loginSelector = (state) => state.login;

export const isLogedtSelector = createSelector(
  [loginSelector],
  (login) => login.isLoged,
);