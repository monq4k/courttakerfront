import { createAction } from 'redux-actions';

import { ROUTES } from '../../constants';
import FetchApi from '../../services/FetchApi';
import * as actionTypes from './actionTypes';

export const addOrRemoveFromCart = createAction(
  actionTypes.ADD_OR_REMOVE_FROM_CART,
);

export const deleteAllProducts = createAction(
  actionTypes.DELETE_ALL_PRODUCTS,
);

export const createOrder = createAction(
  actionTypes.CREATE_ORDER,
);

export const requestFindVenues = async (query, latLong) => {
  const endPoint = 'https://api.foursquare.com/v2/venues/explore?';
  const params = {
    client_id: 'ODHYEK3IO5540Y5ZGN2SOG3204I25NASHSFQ4VCEB3EVFXMX',
    client_secret: 'DAISTBLM10WKY3YGQJM4WGNDACXPIUA2PNR1WQBJBYZIVLCV',
    ll: latLong,
    query,
    v: 20182507,
  };
  try {
    const response = await fetch(endPoint + new URLSearchParams(params));
    const result = await response.json();
    return result.response.groups[0].items;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const requestCreateOrder = (order) => async (
  dispatch,
) => {
  try {
    const response = await FetchApi.post(`/api${ROUTES.ORDERS}`, order);
    dispatch(createOrder({ order }));
  } catch (error) {
    console.log(error.message);
  }
};
