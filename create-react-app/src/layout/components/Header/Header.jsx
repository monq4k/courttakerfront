import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Box,
} from '@material-ui/core';
import { Storefront } from '@material-ui/icons';

import { ROUTES } from '../../../constants';
import useStyles from './HeaderStyles';

const Header = ({ history }) => {
  const classes = useStyles();
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
