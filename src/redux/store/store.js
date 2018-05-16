import { devToolsEnhancer } from 'redux-devtools-extension';
import { createStore } from 'redux';
import rootReducer from '../reducer/rootReducer';

const store = createStore(rootReducer, devToolsEnhancer()
    // other store enhancers if any
);

export default store;
