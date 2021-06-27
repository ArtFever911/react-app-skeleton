import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore from './redux';
import history from './history';
import './sass/index.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

