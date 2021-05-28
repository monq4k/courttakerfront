import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import {
  Typography,
  Box,
  Button,
  Card,
  Container,
  CardContent,
  CardActions,
} from '@material-ui/core';
import { Delete, RemoveShoppingCart } from '@material-ui/icons';

import userImage from '../../../assets/images/userImage.jpg';

import useStyles from './TeamStyles';
import { ROUTES } from '../../../constants';

const Team = ({
  history,
  user
}) => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg" className={classes.root}>
        <Box className={classes.teamContainer}>
          Team page
        </Box>
      </Container>
    </>
  );
};

export default withRouter(Team);
