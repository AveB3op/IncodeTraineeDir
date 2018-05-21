import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducer/index';

export const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(middleware, ReduxThunk))
);

export default store;
