import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root.reducer';
import rootSaga from './root.saga';

export function configureStore(preloadedState, { isServer, req = null }) {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [logger, sagaMiddleware];

  const store: any = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  )

  if (req || !isServer) {
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }

  return store;
}
