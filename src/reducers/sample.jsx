import _ from 'lodash';

const initialState = {
  test: false,
  name: '',
  password: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SAMPLE_SUCCESS':
      return _.assign({}, state, { test: action.test });
    case 'FETCH_SAMPLE_FAILED':
      return _.assign({}, state, { error: action.error });
    case 'SET_SAMPLE_SUCCESS':
      return _.assign({}, state, {
        name: action.data.name,
        password: action.data.password,
      });
    default:
      return state;
  }
};
