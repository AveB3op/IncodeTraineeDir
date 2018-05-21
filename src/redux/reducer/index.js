import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import searchReducer from './searchReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
  data: userReducer,
  filter: searchReducer,
  loading: loadingReducer,
  router: routerReducer
});


export default rootReducer;
