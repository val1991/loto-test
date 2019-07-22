import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducer/root-reducer';

const persistConfig = {
  key: 'loto-test',
  storage,
  blacklist: ['cards']
};

export default function setupStore() {
  const middlewares = applyMiddleware(thunk);
  const enhancer = composeWithDevTools({})(middlewares);
  const persistedReducer = persistReducer(persistConfig, rootReducer());
  const preloadedState = {};

  const store = createStore(persistedReducer, preloadedState, enhancer);
  const persistor = persistStore(store);
  return { store, persistor };
}