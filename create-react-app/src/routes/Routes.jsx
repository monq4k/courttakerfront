import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import CourtsListConnect from './pages/CourtsList';
import CourtPageConnect from './pages/CourtPage';
import LoginPageConnect from './pages/LoginPage';
import ProfileConnect from './pages/Profile';
import TeamConnect from './pages/Team';

import { ROUTES } from '../constants';

const Routes = () => (
  <Switch>
    <Route exact path={ROUTES.MAIN} component={CourtsListConnect} />
    <Route exact path={`${ROUTES.MAIN}/:id`} component={CourtPageConnect} />
    <Route exact path={ROUTES.LOGIN} component={LoginPageConnect} />
    <Route exact path={ROUTES.PROFILE} component={ProfileConnect} />
    <Route exact path={ROUTES.TEAM} component={TeamConnect} />
    <Redirect exact from="/" to={ROUTES.LOGIN} />
  </Switch>
);

export default Routes;
