import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import articlesReducer from './articlesReducer';
import articlesPageReducer from './articlesPageReducer';
import articlePageReducer from './articlePageReducer';
import basketReducer from './basketReducer';
import cagegoriesReducer from './categoriesReducer';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    articles: articlesReducer,
    articlesPage: articlesPageReducer,
    articlePage: articlePageReducer,
    basket: basketReducer,
    categories: cagegoriesReducer
  });

export default createRootReducer;
