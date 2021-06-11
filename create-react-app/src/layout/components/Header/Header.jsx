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
import { SportsBasketball, AccountCircle } from '@material-ui/icons';

import { ROUTES } from '../../../constants';
import useStyles from './HeaderStyles';

const Header = ({ history, logoutSuccess, fullName }) => {
  const classes = useStyles();
  const goToLink = (link) => {
    link.includes('login') && logoutSuccess();
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
              CourtTaker - Играй с комфортом!
            </Typography>
          </Box>
          <Box className={classes.headerActionsContainer}>
            <div
              onClick={() => goToLink(ROUTES.PROFILE)}
              className={classes.profileWrapper}
            >
              <AccountCircle fontSize="large" />
              <Typography
                variant="h6"
                component="h1"
                className={classes.profileName}
              >
                Привет, {fullName.split(' ')[0]}
              </Typography>
            </div>

            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={() => goToLink(ROUTES.LOGIN)}
            >
              Выйти
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
