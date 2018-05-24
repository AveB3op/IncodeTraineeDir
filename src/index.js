import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import dotenv from 'dotenv';
import { ConnectedRouter } from 'react-router-redux';
import 'semantic-ui-css/semantic.min.css';
import store, { history } from './redux/store/store';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

dotenv.config();

ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <App />
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'),
);

registerServiceWorker();
