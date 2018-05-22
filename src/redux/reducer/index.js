import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  data: userReducer,
  router: routerReducer
});


export default rootReducer;
