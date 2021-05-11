import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import CourtsListConnect from './pages/CourtsList';
// import CartPageConnect from './pages/CartPage';
// import LoginPage from './pages/LoginPage';
// import OrdersPageConnect from './pages/OrdersPage';
// import ProductPage from './pages/ProductPage';

import { ROUTES } from '../constants';

const Routes = () => (
  <Switch>
    <Route exact path={ROUTES.MAIN} component={CourtsListConnect} />
    {/* <Route path={`${ROUTES.MAIN}/:id`} component={ProductPage} />
    <Route exact path={ROUTES.ORDERS} component={OrdersPageConnect} />
    <Route exact path={ROUTES.CART} component={CartPageConnect} />
    <Route exact path={ROUTES.LOGIN} component={LoginPage} /> */}
    <Redirect exact from="/" to={ROUTES.MAIN} />
  </Switch>
);

export default Routes;
