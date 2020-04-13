import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Articles from './containers/articles/articles';

export default (
  <Switch>
    <Route exact path='/' component={Articles} />
  </Switch>
);
