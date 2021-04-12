import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Grid, Typography, Box } from '@material-ui/core';
import { RemoveShoppingCart, StarBorder } from '@material-ui/icons';

import ProductSlider from './components/ProductSlider';
import ProductItemConnect from './components/ProductItem';
import InfinityScroll from './components/InfinityScroll';
import ProductListBar from './components/ProductListBar';
import EmptyListReplacer from '../../../shared/EmptyListReplacer';

import useStyles from './ProductListStyles';

const ProductList = ({
  history,
  cardList,
  requestAllProducts,
  totalCount,
  favorite,
  cart,
}) => {
  const classes = useStyles();

  const [isShowFavorite, setIsShowFavorite] = useState(false);
  const [isShowInCart, setIsShowInCart] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const [page, setPage] = useState(1);
  const fetchOptions = {
    page,
    limit: 8,
    title_like: searchValue,
  };

  const [contentToRender, setContentToRender] = useState([]);

  const initialGetDataRequest = (title_like = '') => {
    setPage(1);
    requestAllProducts({ ...fetchOptions, page: 1, title_like }).then(
      () => {
        setPage(2);
      },
    );
  };

  useEffect(() => {
    setContentToRender(cardList);
  }, [cardList]);

  return (
    <>
      <ProductSlider
        items={cardList.filter((card) => card.id < 8).map((card) => card.img)}
      />
      <ProductListBar
        initialGetDataRequest={initialGetDataRequest}
        setContentToRender={setContentToRender}
        isShowFavorite={isShowFavorite}
        isShowInCart={isShowInCart}
        setIsShowFavorite={setIsShowFavorite}
        setIsShowInCart={setIsShowInCart}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        favorite={favorite}
        cart={cart}
      />
      <Grid container spacing={3} className={classes.root}>
        {(isShowInCart && isShowFavorite && cart.length === 0 && favorite.length === 0 && (
          <EmptyListReplacer>
            <Box className={classes.emptyFilterContainer}>
              <RemoveShoppingCart color="disabled" className={classes.emptyFilterIcon} />
              <StarBorder color="disabled" className={classes.emptyFilterIcon} />
              <Typography color="secondary" className={classes.emptyFilterText}>
                There are no products in cart and in favorite!
              </Typography>
            </Box>
          </EmptyListReplacer>
        ))
        || (isShowFavorite && favorite.length === 0 && (
          <EmptyListReplacer>
            <Box className={classes.emptyFilterContainer}>
              <StarBorder color="disabled" className={classes.emptyFilterIcon} />
              <Typography color="secondary" className={classes.emptyFilterText}>
                There are no products in favorite!
              </Typography>
            </Box>
          </EmptyListReplacer>
        ))
        || (isShowInCart && cart.length === 0 && (
          <EmptyListReplacer>
            <Box className={classes.emptyFilterContainer}>
              <RemoveShoppingCart color="disabled" className={classes.emptyFilterIcon} />
              <Typography color="secondary" className={classes.emptyFilterText}>
                There are no products in cart!
              </Typography>
            </Box>
          </EmptyListReplacer>
        ))
        || (contentToRender.map((card) => (
          <ProductItemConnect
            isInFavorite={!!favorite.find((product) => product.id === card.id)}
            isInCart={!!cart.find((product) => product.id === card.id)}
            key={card.id}
            history={history}
            card={card}
          />
        )))}
      </Grid>
      {!isShowFavorite && !isShowInCart && (
        <InfinityScroll
          page={page}
          pageLimit={Math.ceil(totalCount / 8)}
          fetchOptions={fetchOptions}
          setPage={setPage}
          requestAllProducts={requestAllProducts}
        />
      )}
    </>
  );
};

ProductList.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,

  cardList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,

  totalCount: PropTypes.number.isRequired,

  requestAllProducts: PropTypes.func.isRequired,

  favorite: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default withRouter(ProductList);
