import _ from 'lodash';
import { openDialog } from '../actions/dialog';

export const authenticate = (store) => (next) => (action) => {
  if (_.isEmpty(action.error)) {
    return next(action);
  }
  if (action.isDialog) {
    return next(action);
  }
  const { response } = action.error;
  if (response.status === 401) {
    store.dispatch(openDialog(action.error.message));
  }
  return next(action);
};
