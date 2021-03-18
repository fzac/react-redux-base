import axios from 'axios';

const TARGET = 'TEXT';

export const fetchText = () => (dispatch) => {
  const url = `${process.env.HOST}/api/text`;
  return axios
    .post(url)
    .then((res) => {
      dispatch({
        type: `FETCH_${TARGET}_SUCCESS`,
        data: res.data,
      });
      return { success: true };
    })
    .catch((error) => {
      dispatch({
        type: `FETCH_${TARGET}_FAILED`,
        error,
      });
      return { success: false }
    });
}
