import React, {useSelector} from 'react';
import PropTypes from 'prop-types';

import { Container } from '@material-ui/core';

import Header from './components/Header';
import Footer from './components/Footer';
import useStyles from './LayoutStyles';
// import { isLogedSelector } from '../store/login/selectors';

import '../styles/reset.scss';

const Layout = ({ children }) => {
  const classes = useStyles();
  const isLoged = useSelector((state) => state.login.isLoged);

  return (
    <>
      {isLoged && <Header />}
      <Container className={classes.container}>{children}</Container>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
