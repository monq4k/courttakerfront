import { createSelector } from 'reselect';

import { cartProductsSelector } from '../cart/selectors';

const shopSelector = (state) => state.shop;

export const productListSelector = createSelector(
  [shopSelector],
  (shop) => shop.products.list,
);

export const filteredProductListSelector = createSelector(
  [shopSelector, cartProductsSelector],
  (shop, cartProducts) => {
    const result = shop.favorite.filter(
      (product) => cartProducts.find((cartProduct) => cartProduct.id === product.id),
    );

    return result;
  },
);
