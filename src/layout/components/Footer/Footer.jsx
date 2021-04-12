import React from 'react';

import {
  Typography, Container,
} from '@material-ui/core';

import useStyles from './FooterStyles';

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footerWrapper}>
      <Container className={classes.footerContainer}>
        <Typography align="center" variant="body1" color="inherit">
          Copyright © 2021 by Product shop
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
