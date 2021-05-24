import { createSelector } from 'reselect';

const courtSelector = (state) => state.courts;

export const courtListSelector = createSelector(
  [courtSelector],
  (courts) => courts.courts,
);