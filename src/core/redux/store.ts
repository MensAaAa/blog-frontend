import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import rootReducer from './root.reducer';
import rootSaga from './root.saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware];

export const makeStore = (initialState, options = {}) => {
  console.log(options)
  const store: any = createStore(rootReducer, initialState, applyMiddleware(...middlewares));
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store
}
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
