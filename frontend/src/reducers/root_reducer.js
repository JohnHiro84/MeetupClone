// src/reducers/root_reducer.js

import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import events from './events_reducer';
import comments from './comments_reducer';

const RootReducer = combineReducers({
  errors,
  session,
  events,
  comments

});

export default RootReducer;
