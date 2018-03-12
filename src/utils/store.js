import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import reducers from './../reducers';

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware,
    createLogger({ collapsed: true }),
  ),
);

export default store;