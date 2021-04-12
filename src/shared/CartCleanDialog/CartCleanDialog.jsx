import React from 'react';
import PropTypes from 'prop-types';

import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from '@material-ui/core';

const CartCleanDialog = ({ open, onClose, deleteAllProducts }) => {
  const handleOk = () => {
    deleteAllProducts();
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      aria-labelledby="confirmation-dialog-title"
      open={open}
    >
      <DialogTitle id="confirmation-dialog-title">
        Are you sure you want to delete all products from the cart?
      </DialogTitle>
      <DialogActions>
        <Button autoFocus onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleOk} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

CartCleanDialog.propTypes = {
  open: PropTypes.bool.isRequired,

  onClose: PropTypes.func.isRequired,
  deleteAllProducts: PropTypes.func.isRequired,
};

export default CartCleanDialog;
