import React, { forwardRef } from 'react';

import { TextField } from '@material-ui/core';
import useStyles from '../CheckoutFormStyles';

const CustomPhoneNumber = (props, ref) => {
  const classes = useStyles();

  return (
    <TextField
      {...props}
      label="Phone"
      inputRef={ref}
      variant="outlined"
      className={classes.formInput}
    />
  );
};

export default forwardRef(CustomPhoneNumber);
