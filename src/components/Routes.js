import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {
  Question,
  Results
} from '../pages';
// import PageNotFound from './pageNotFound/pageNotFound';

const Routes = () => (
  <React.Fragment>
    <Switch>
      <Route path="/app/results" component={Results} />
      <Route path="/app/question" component={Question} />
      {/* <Route path="/" component={PageNotFound} /> */}
      <Redirect to="/app/question" />
    </Switch>
  </React.Fragment>
);

export default Routes;
