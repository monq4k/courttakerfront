import React from 'react';
import PropTypes from 'prop-types';

import {
  Modal,
  Backdrop,
  Fade,
  Typography,
  Box,
} from '@material-ui/core';

import CheckoutForm from '../CheckoutForm';

import useStyles from './CheckoutModalStyles';

const CheckoutModal = ({
  open,
  history,
  handleClose,
  requestCreateOrder,
  cartProducts,
  deleteAllProducts,
}) => {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="clean-modal-title"
      aria-describedby="clean-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box className={classes.modalBody}>
          <Typography
            variant="h2"
            id="clean-modal-title"
            className={classes.modalTitle}
          >
            Checkout products
          </Typography>
          <Typography
            variant="h2"
            id="clean-modal-description"
            className={classes.modalDescription}
          >
            Fill in the blank fields for ordering
          </Typography>
          <CheckoutForm
            onCancel={handleClose}
            requestCreateOrder={requestCreateOrder}
            cartProducts={cartProducts}
            history={history}
            deleteAllProducts={deleteAllProducts}
          />
        </Box>
      </Fade>
    </Modal>
  );
};

CheckoutModal.propTypes = {
  open: PropTypes.bool.isRequired,

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

  handleClose: PropTypes.func.isRequired,
  requestCreateOrder: PropTypes.func.isRequired,
  deleteAllProducts: PropTypes.func.isRequired,
};

export default CheckoutModal;
