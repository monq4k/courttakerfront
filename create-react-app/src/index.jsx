import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import { store, persistor } from './store';

import App from './App';

const getAppComponent = () => (
  <BrowserRouter>
    <Provider store={store.store}>
      <PersistGate persistor={persistor.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(getAppComponent(), document.getElementById('root'));
