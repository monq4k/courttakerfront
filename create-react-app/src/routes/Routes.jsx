import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import CourtsListConnect from './pages/CourtsList';
import LoginPage from './pages/LoginPage';

import { ROUTES } from '../constants';

const Routes = () => (
  <Switch>
    <Route exact path={ROUTES.MAIN} component={CourtsListConnect} />
    <Route exact path={ROUTES.LOGIN} component={LoginPage} />
    <Redirect exact from="/" to={ROUTES.LOGIN} />
  </Switch>
);

export default Routes;
