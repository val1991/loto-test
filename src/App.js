import React from 'react';

import './App.scss';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Root from './application/container/Root';

import setupStore from './application/store';

const { store, persistor } = setupStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
}

export default App;
