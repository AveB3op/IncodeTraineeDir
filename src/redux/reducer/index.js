import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
    data: userReducer,
    filter:searchReducer,
    router: routerReducer
});



export default rootReducer;
