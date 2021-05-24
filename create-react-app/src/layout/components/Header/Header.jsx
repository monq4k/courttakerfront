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
import { SportsBasketball } from '@material-ui/icons';

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
            <SportsBasketball fontSize="large" />
            <Typography
              variant="h6"
              component="h1"
              className={classes.headerTitle}
            >
              CourtTaker - Get your court!
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
