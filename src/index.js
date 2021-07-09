import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Routes from './Routes';
import rootReducer from './modules';
import Reset from './styles/Reset';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Reset />
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
