import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@material-ui/core';

import Header from './components/Header';
import Footer from './components/Footer';
import useStyles from './LayoutStyles';

import '../styles/reset.scss';

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container className={classes.container}>{children}</Container>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
