import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Box,
  Badge,
} from '@material-ui/core';
import { Storefront, ShoppingCart, LocalShipping } from '@material-ui/icons';

import { ROUTES } from '../../../constants';
import useStyles from './HeaderStyles';
import { cartProductsSelector } from '../../../store/cart/selectors';

const Header = ({ history }) => {
  const classes = useStyles();
  const cartProducts = useSelector(cartProductsSelector);
  const goToLink = (link) => {
    history.push(link);
  };

  return (
    <AppBar>
      <Container>
        <Toolbar className={classes.toolBar}>
          <Box
            className={classes.logoContainer}
            onClick={() => goToLink(ROUTES.MAIN)}
          >
            <Storefront fontSize="large" />
            <Typography
              variant="h6"
              component="h1"
              className={classes.headerTitle}
            >
              Welcome to the shop
            </Typography>
          </Box>
          <Box className={classes.headerActionsContainer}>
            <Badge badgeContent={cartProducts.length} color="secondary">
              <Button
                variant="contained"
                className={classes.button}
                onClick={() => goToLink(ROUTES.CART)}
              >
                Cart
                <ShoppingCart fontSize="default" />
              </Button>
            </Badge>
            <Button
              variant="contained"
              className={classes.button}
              onClick={() => goToLink(ROUTES.ORDERS)}
            >
              Orders
              <LocalShipping fontSize="default" />
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={() => goToLink(ROUTES.LOGIN)}
            >
              Log in
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Header);
