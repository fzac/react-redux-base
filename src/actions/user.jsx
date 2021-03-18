import axios from 'axios';
import _ from 'lodash';
import { push } from 'connected-react-router';
import { setSession, deleteSession } from '../../helpers/session';
import { openMessage } from './message';


const TARGET = 'USER';

const loginSuccess = (data) => ({
  type: 'LOGIN_SUCCESS',
  data,
});

const loginFailed = (error) => ({
  type: 'LOGIN_FAILED',
  error,
});

const logoutSuccess = () => ({
  type: 'LOGOUT_SUCCESS',
});

export const logout = () => (
  (dispatch) => {
    dispatch(logoutSuccess());
    axios.defaults.headers.common['X-Yokai-Token'] = '';
    deleteSession('token');
    dispatch(push('/login'));
    dispatch(openMessage('ログアウトしました'));
  }
);
