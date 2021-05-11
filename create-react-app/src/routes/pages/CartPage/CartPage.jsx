import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import {
  Grid,
  Typography,
  Box,
  Button,
  Divider,
} from '@material-ui/core';
import { Delete, RemoveShoppingCart } from '@material-ui/icons';

import CartItemConnect from './components/CartItem';
import EmptyListReplacer from '../../../shared/EmptyListReplacer';
import CartCleanDialog from '../../../shared/CartCleanDialog';
import CheckoutModal from '../../../shared/CheckoutModal';

import useStyles from './CartPageStyles';
import { ROUTES } from '../../../constants';

const CartPage = ({
  history,
  cartProducts,
  deleteAllProducts,
  requestCreateOrder,
}) => {
  const classes = useStyles();
  const [totalCost, setTotalCost] = useState(0);
  const [isCleanAllDialogOpen, setIsCleanAllDialogOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const handleCheckoutModalOpen = () => {
    setIsCheckoutModalOpen(true);
  };

  const handleCheckoutModalClose = () => {
    setIsCheckoutModalOpen(false);
  };

  const handleOnCleanCartClicked = () => {
    setIsCleanAllDialogOpen(true);
  };

  const handleCleanDialogClose = () => {
    setIsCleanAllDialogOpen(false);
  };

  const handleReturnToMainPageClicked = () => {
    history.push(ROUTES.MAIN);
  };

  const countTotalCost = () => {
    const result = cartProducts.reduce(
      (acc, product) => acc + product.price,
      0,
    );
    setTotalCost(result);
  };

  useEffect(() => {
    countTotalCost();
  }, [cartProducts]);

  return (
    <>
      {cartProducts.length !== 0 ? (
        <>
          <Button
            color="secondary"
            variant="contained"
            size="medium"
            className={classes.cleanCartButton}
            onClick={() => handleOnCleanCartClicked()}
          >
            Clean your cart
            <Delete fontSize="default" />
          </Button>
          <CartCleanDialog
            open={isCleanAllDialogOpen}
            onClose={handleCleanDialogClose}
            deleteAllProducts={deleteAllProducts}
          />
          <Divider />
          <Grid container className={classes.root}>
            {cartProducts.map((product) => (
              <CartItemConnect
                key={product.id}
                product={product}
                history={history}
              />
            ))}
          </Grid>
          <Box className={classes.cartFooter}>
            <Typography variant="subtitle2" className={classes.cartTotal}>
              {`Total cost: ${totalCost}$`}
            </Typography>
            <Button
              color="secondary"
              variant="contained"
              size="medium"
              onClick={() => handleCheckoutModalOpen()}
              className={classes.checkoutButton}
            >
              Checkout
            </Button>
            <CheckoutModal
              open={isCheckoutModalOpen}
              handleClose={handleCheckoutModalClose}
              cartProducts={cartProducts}
              requestCreateOrder={requestCreateOrder}
              history={history}
              deleteAllProducts={deleteAllProducts}
            />
          </Box>
        </>
      ) : (
        <>
          <EmptyListReplacer>
            <Box className={classes.emptyCartContainer}>
              <RemoveShoppingCart color="disabled" className={classes.emptyCartIcon} />
              <Typography color="secondary" className={classes.emptyCartText}>
                Your cart is empty. Let`s go shopping!
              </Typography>
            </Box>
          </EmptyListReplacer>
          <Button
            color="secondary"
            variant="contained"
            size="medium"
            onClick={() => handleReturnToMainPageClicked()}
            className={classes.returnButton}
          >
            Return to main page
          </Button>
        </>
      )}
    </>
  );
};

CartPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,

  cartProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,

  deleteAllProducts: PropTypes.func.isRequired,
  requestCreateOrder: PropTypes.func.isRequired,
};

export default withRouter(CartPage);
