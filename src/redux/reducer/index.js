import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import clientReducer from './clientReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  data: clientReducer,
  users: userReducer,
  router: routerReducer
});


export default rootReducer;
