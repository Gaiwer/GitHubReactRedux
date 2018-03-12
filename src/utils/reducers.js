import { combineReducers } from 'redux';
import { authReducer, mainReducer } from './../reducers/';

const reducers = combineReducers({
  auth: authReducer,
  main: mainReducer,
});

export default reducers;