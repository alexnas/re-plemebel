import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Articles from './containers/articles/articles';
import Article from './containers/article/article';
import Basket from './containers/basket/basket';
import Authentication from './containers/authentication/authentication';

export default (
  <Switch>
    <Route exact path='/' component={Articles} />
    <Route path='/categories/:id' component={Articles} />
    <Route path='/articles/:id' component={Article} />
    <Route path='/basket' component={Basket} />
    <Route path='/login' component={Authentication} />
    <Route path='/register' component={Authentication} />
  </Switch>
);
