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

const setSampleSuccess = data => (
  {
    type: 'SET_SAMPLE_SUCCESS',
    data,
  }
);

const setSampleFailed = error => (
  {
    type: 'SET_SAMPLE_FAILED',
    error,
  }
);


export const fetchSample = () => (
  (dispatch) => {
    const url = `${process.env.HOST}/test`;
    const params = {
      param: 1,
    };

    setTimeout(() => {
      dispatch(fetchSampleSuccess('ok'));
    }, 3000);
    /*
    return axios.get(url, { params }).then((res) => {
      dispatch(fetchSampleSuccess(res.data));
    }).catch((error) => {
      dispatch(fetchSampleFailed(error));
    });
    */
  }
);

export const setSample = (data) => (
  (dispatch) => {
    setTimeout(() => {
      dispatch(setSampleSuccess(data));
    }, 1000);
  }
);

export const getTime = (time) => (
  (dispatch) => {

  }
);
