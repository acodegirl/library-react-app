import axios from 'axios';
import { AUTHENTICATE_USER } from './types';

export const authenticateUser = (postData, history) => dispatch => {
  axios({
    method: 'post',
    url: '/api/auth',
    data: postData,
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      const token = response.data;
      localStorage.setItem('access_token', token);
      dispatch({
        type: AUTHENTICATE_USER,
        payload: true
      });
      history.push('/books');
    })
    .catch(error => {
      history.push('/login');
    });
};
