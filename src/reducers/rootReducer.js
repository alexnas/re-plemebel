import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import articlesReducer from './articlesReducer';
import articlesPageReducer from './articlesPageReducer';
import articlePageReducer from './articlePageReducer';
import basketReducer from './basketReducer';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    articles: articlesReducer,
    articlesPage: articlesPageReducer,
    articlePage: articlePageReducer,
    basket: basketReducer
  });

export default createRootReducer;
