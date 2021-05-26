import { createSelector } from 'reselect';

const loadingSelector = (state) => state.loading;

export const isLoadingSelector = createSelector(
  [loadingSelector],
  (loading) => loading.isLoading,
);