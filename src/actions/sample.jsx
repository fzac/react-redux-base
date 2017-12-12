import axios from 'axios';

const fetchSampleSuccess = test => (
  {
    type: 'FETCH_SAMPLE_SUCCESS',
    test,
  }
);

const fetchSampleFailed = error => (
  {
    type: 'FETCH_SAMPLE_FAILED',
    error,
  }
);


export const fetchSample = () => (
  (dispatch) => {
    const url = `${process.env.HOST}/test`;
    const params = {
      param: 1,
    };

    dispatch(fetchSampleSuccess('ok'));
    /*
    return axios.get(url, { params }).then((res) => {
      dispatch(fetchSampleSuccess(res.data));
    }).catch((error) => {
      dispatch(fetchSampleFailed(error));
    });
    */
  }
);
