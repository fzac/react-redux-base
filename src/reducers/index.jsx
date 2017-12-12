import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import sample from './sample';
import dialog from './dialog';

export default combineReducers({
  sample,
  dialog,
  routing: routerReducer,
});
