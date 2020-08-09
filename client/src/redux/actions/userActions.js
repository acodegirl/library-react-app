import { ADD_USER, FETCH_USERS, FETCH_DATA_ERROR } from './types';
import axios from 'axios';

export const fetchUsers = () => dispatch => {
  axios({
    method: 'get',
    url: '/api/users',
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('access_token')
    }
  })
    .then(response => {
      const responseData = response.data;
      dispatch({
        type: FETCH_USERS,
        payload: responseData
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const addUser = (postData, history) => dispatch => {
  axios({
    method: 'post',
    url: '/api/users',
    data: postData,
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      const responseData = response.data;
      dispatch({
        type: ADD_USER,
        payload: responseData
      });
      history.push('/login');
    })
    .catch(error => {
      history.push('/sign-up');
      dispatch({
        type: FETCH_DATA_ERROR,
        payload: error
      });
    });
};
