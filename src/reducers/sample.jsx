import _ from 'lodash';

const initialState = {
  test: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SAMPLE_SUCCESS':
      return _.assign({}, state, { test: action.test });
    case 'FETCH_SAMPLE_FAILED':
      return _.assign({}, state, { error: action.error });
    default:
      return state;
  }
};
