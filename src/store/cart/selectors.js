import { createSelector } from 'reselect';

const cartSelector = (state) => state.cart;

export const cartProductsSelector = createSelector(
  [cartSelector],
  (cart) => cart.products,
);
