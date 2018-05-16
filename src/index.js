import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store/store';

ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
