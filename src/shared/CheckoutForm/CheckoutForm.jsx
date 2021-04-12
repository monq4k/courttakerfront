import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';

import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { ToastContainer, toast } from 'react-toastify';
import PhoneInput from 'react-phone-number-input';
import 'react-toastify/dist/ReactToastify.css';
import 'react-phone-number-input/style.css';

import useStyles from './CheckoutFormStyles';
import { ROUTES } from '../../constants';
import CustomPhoneNumber from './components/CustomPhoneNumber';
import { requestFindVenues } from '../../store/cart/actions';

const CheckoutForm = ({
  onCancel,
  requestCreateOrder,
  cartProducts,
  history,
  deleteAllProducts,
}) => {
  const classes = useStyles();
  const [isButtonSubmitDisabled, setIsButtonSubmitDisabled] = useState(true);
  const [isButtonCancelDisabled, setIsButtonCancelDisabled] = useState(false);
  const [nameInput, setNameInput] = useState({
    value: '',
    error: false,
  });
  const [emailInput, setEmailInput] = useState({
    value: '',
    error: false,
  });
  const [addressInput, setAddressInput] = useState({
    value: '',
    inputValue: '',
    error: false,
  });
  const [phoneInput, setPhoneInput] = useState();
  const [latLong, setLetLong] = useState('');
  const [isAutocompleteLoading, setIsAutocompleteLoading] = useState(false);
  const [isAutocompleteOpen, setIsAutocompleteOpen] = useState(false);
  const [venues, setVenues] = useState([]);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((response) => {
      setLetLong(`${response.coords.latitude},${response.coords.longitude}`);
    });
  };

  const handleOnInputNameChanged = (value) => {
    const validateValue = !validator.isEmpty(value) && validator.isAlpha(value);
    setNameInput({
      value,
      error: !validateValue,
    });
  };

  const handleOnInputEmailChanged = (value) => {
    const validateValue = !validator.isEmpty(value) && validator.isEmail(value);
    setEmailInput({
      value,
      error: !validateValue,
    });
  };

  const handleOnInputAddressChanged = (value) => {
    if (!value) {
      setVenues([]);
      setIsAutocompleteOpen(false);
      return;
    }
    setAddressInput({
      ...addressInput,
      inputValue: value,
    });
    setIsAutocompleteLoading(true);
    requestFindVenues(value, latLong).then((result) => {
      setVenues(result);
      setIsAutocompleteLoading(false);
      setIsAutocompleteOpen(true);
    });
  };

  const handleOnCancel = () => {
    onCancel();
  };

  const handleOnSubmit = () => {
    setIsButtonSubmitDisabled(true);
    setIsButtonCancelDisabled(true);

    const order = {
      name: nameInput.value,
      email: emailInput.value,
      address: addressInput.value,
      phone: phoneInput,
      products: cartProducts,
    };

    requestCreateOrder(order).then(() => {
      const notify = () => {
        toast.success('Order successfully created!', {
          position: toast.POSITION.TOP_RIGHT,
          onClose: () => {
            deleteAllProducts();
            history.push(ROUTES.MAIN);
          },
        });
      };
      notify();
    });
  };

  useEffect(() => {
    if (
      !phoneInput || nameInput.error || emailInput.error || addressInput.error
      || nameInput.value.length === 0 || addressInput.inputValue.length === 0
      || addressInput.value.length === 0
    ) {
      setIsButtonSubmitDisabled(true);
    } else {
      setIsButtonSubmitDisabled(false);
    }
  }, [nameInput.value, emailInput.value, addressInput.value, phoneInput]);

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      <ToastContainer autoClose={1500} hideProgressBar closeOnClick />
      <Box className={classes.formInputContainer}>
        <TextField
          label="Name"
          variant="outlined"
          className={classes.formInput}
          value={nameInput.value}
          error={nameInput.error}
          onChange={(e) => handleOnInputNameChanged(e.target.value)}
          helperText={
            nameInput.error
              ? 'Incorrect name'
              : 'Only latin alphabet characters'
          }
        />
        <TextField
          label="Email"
          variant="outlined"
          className={classes.formInput}
          value={emailInput.value}
          error={emailInput.error}
          onChange={(e) => handleOnInputEmailChanged(e.target.value)}
          helperText={
            emailInput.error
              ? 'Incorrect email'
              : 'Example: googlename@gmail.com'
          }
        />
        <Autocomplete
          options={venues}
          getOptionLabel={(option) => (typeof option === 'string' ? option : option.venue.name)}
          getOptionSelected={(option, value) => option.value === value.value}
          autoComplete
          loading={isAutocompleteLoading}
          open={isAutocompleteOpen}
          onOpen={() => setIsAutocompleteOpen(true)}
          onClose={() => setIsAutocompleteOpen(false)}
          includeInputInList
          clearOnEscape
          filterSelectedOptions
          onChange={(e, newValue) => {
            setVenues([]);
            setAddressInput({ ...addressInput, value: `${newValue.venue.name}. ${newValue.venue.location.address}` });
          }}
          onInputChange={(e, newValue) => handleOnInputAddressChanged(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Address"
              variant="outlined"
              className={classes.formInput}
              error={addressInput.error}
              helperText={
                addressInput.error
                  ? 'Incorrect address'
                  : 'Country, city, home address'
              }
            />
          )}
          renderOption={(option) => (
            <Grid container alignItems="center">
              <Grid item>
                <LocationOnIcon />
              </Grid>
              <Grid item xs>
                <Typography variant="body2" color="textSecondary">
                  {option.venue.name}
                </Typography>
              </Grid>
            </Grid>
          )}
        />

        <PhoneInput
          placeholder="Enter phone number"
          value={phoneInput}
          className={classes.phoneInputContainer}
          onChange={setPhoneInput}
          inputComponent={CustomPhoneNumber}
        />
      </Box>
      <Box className={classes.formActionContainer}>
        <Button
          variant="contained"
          size="medium"
          color="inherit"
          disabled={isButtonCancelDisabled}
          className={classes.formButton}
          onClick={() => handleOnCancel()}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          size="medium"
          color="secondary"
          disabled={isButtonSubmitDisabled}
          className={classes.formButton}
          onClick={() => handleOnSubmit()}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

CheckoutForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
  requestCreateOrder: PropTypes.func.isRequired,

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
};

export default CheckoutForm;
