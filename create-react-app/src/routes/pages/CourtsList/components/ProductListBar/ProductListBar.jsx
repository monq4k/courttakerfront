import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Box,
  Button,
  TextField,
  InputAdornment,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { filteredProductListSelector } from '../../../../../store/productList/selectors';

import useStyles from './ProductListBarStyles';

const ProductListBar = ({
  searchValue,
  setSearchValue,
  initialGetDataRequest,
  setContentToRender,
  setIsShowFavorite,
  setIsShowInCart,
  isShowFavorite,
  isShowInCart,
  favorite,
  cart,
}) => {
  const classes = useStyles();
  const favoriteCartProducts = useSelector(filteredProductListSelector);

  const handleShowFavoriteClick = (value) => {
    setIsShowFavorite(value);
    setSearchValue('');
  };

  const handleShowCartProductsClick = (value) => {
    setIsShowInCart(value);
    setSearchValue('');
  };

  const handleOnChangeSearch = (value) => {
    setSearchValue(value);
    switch (true) {
      case isShowFavorite && isShowInCart:
        setContentToRender(
          favoriteCartProducts.filter((product) => product.title.includes(value)),
        );
        break;
      case isShowFavorite:
        setContentToRender(
          favorite.filter((product) => product.title.includes(value)),
        );
        break;
      case isShowInCart:
        setContentToRender(
          cart.filter((product) => product.title.includes(value)),
        );
        break;
      default:
        initialGetDataRequest(value);
    }
  };

  useEffect(() => {
    switch (true) {
      case isShowFavorite && isShowInCart:
        setContentToRender(favoriteCartProducts);
        break;
      case !isShowFavorite && !isShowInCart:
        initialGetDataRequest();
        break;
      case isShowFavorite:
        setContentToRender(favorite);
        break;
      case isShowInCart:
        setContentToRender(cart);
        break;
      default:
    }
  }, [isShowFavorite, isShowInCart]);

  return (
    <Box className={classes.filterContainer}>
      <Box className={classes.filterViewContainer}>
        <Button
          className={classes.filterListButton}
          onClick={() => handleShowFavoriteClick(!isShowFavorite)}
          variant="contained"
          size="small"
          color={isShowFavorite ? 'secondary' : 'inherit'}
        >
          Show Favorite
        </Button>
        <Button
          className={classes.filterListButton}
          onClick={() => handleShowCartProductsClick(!isShowInCart)}
          variant="contained"
          size="small"
          color={isShowInCart ? 'secondary' : 'inherit'}
        >
          Show Goods in cart
        </Button>
      </Box>
      <TextField
        variant="outlined"
        size="small"
        onChange={(e) => handleOnChangeSearch(e.target.value)}
        className={classes.filterSearch}
        label="Search"
        type="search"
        placeholder="Enter product"
        value={searchValue}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

ProductListBar.propTypes = {
  searchValue: PropTypes.string.isRequired,

  isShowFavorite: PropTypes.bool.isRequired,
  isShowInCart: PropTypes.bool.isRequired,

  setSearchValue: PropTypes.func.isRequired,
  initialGetDataRequest: PropTypes.func.isRequired,
  setContentToRender: PropTypes.func.isRequired,
  setIsShowFavorite: PropTypes.func.isRequired,
  setIsShowInCart: PropTypes.func.isRequired,

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

export default ProductListBar;
