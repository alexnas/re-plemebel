import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import articlesReducer from './articlesReducer';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    articlesReducer
  });

export default createRootReducer;
