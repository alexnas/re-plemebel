import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import createRootReducer from './reducers/rootReducer';

export const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history)];

export default function ConfigureStore() {
  const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  return store;
}
