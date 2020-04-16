import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Articles from './containers/articles/articles';
import Article from './containers/article/article';

export default (
  <Switch>
    <Route exact path='/' component={Articles} />
    <Route exact path='/article/:id' component={Article} />
  </Switch>
);
