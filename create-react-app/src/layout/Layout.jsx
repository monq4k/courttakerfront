import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@material-ui/core';

import Header from './components/Header';
import Footer from './components/Footer';
import useStyles from './LayoutStyles';

import Loader from '../components';

import '../styles/reset.scss';

const Layout = ({ children, isLoged, isLoading }) => {
  const classes = useStyles();

  return (
    <>
      {isLoading && <Loader />}
      {isLoged && <Header />}
      <Container className={classes.container}>{children}</Container>
      {isLoged && <Footer />}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
