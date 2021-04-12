import { createAction } from 'redux-actions';

import FetchApi from '../../services/FetchApi';

import * as actionTypes from './actionTypes';
import { ROUTES } from '../../constants';
import { fetchProductsFailed } from '../errors/actions';
import { parsingApiPathOptions } from '../../utils';

export const fetchProductsSuccess = createAction(
  actionTypes.FETCH_PRODUCTS_SUCCESS,
);

export const addOrRemoveFromFavorite = createAction(
  actionTypes.ADD_OR_REMOVE_FROM_FAVORITE,
);

export const requestAllProducts = ({
  page,
  limit,
  title_like,
}) => async (
  dispatch,
) => {
  try {
    const response = await FetchApi.get(
      parsingApiPathOptions(`/api${ROUTES.MAIN}`, {
        _page: page,
        _limit: limit,
        title_like,
      }),
    );
    const { data, totalCountResponse } = response;
    dispatch(fetchProductsSuccess({ products: data, totalCount: totalCountResponse, page }));
  } catch (error) {
    dispatch(fetchProductsFailed({ error: error.message }));
  }
};
