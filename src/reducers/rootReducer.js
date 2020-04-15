import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import articlesReducer from './articlesReducer';
import articlesPageReducer from './articlesPageReducer';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    articles: articlesReducer,
    articlesPage: articlesPageReducer
  });

export default createRootReducer;
