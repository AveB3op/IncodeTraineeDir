import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store,{ history } from './redux/store/store';



it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store = {store}>
            <ConnectedRouter history = {history}>
                <App />
            </ConnectedRouter>
        </Provider>
        , div);
    ReactDOM.unmountComponentAtNode(div);
});


registerServiceWorker();
