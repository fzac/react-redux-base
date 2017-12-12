import _ from 'lodash';

const initialState = {
  isDialog: false,
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_DIALOG':
      return _.assign({}, state, { isDialog: true, message: action.message });
    case 'CLOSE_DIALOG':
      return _.assign({}, state, initialState);
    default:
      return state;
  }
};
