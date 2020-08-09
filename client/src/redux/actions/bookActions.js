import { ADD_BOOK, FETCH_BOOKS, FETCH_DATA_ERROR } from './types';
import axios from 'axios';

export const fetchBooks = () => dispatch => {
  axios({
    method: 'get',
    url: '/api/books',
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('access_token')
    }
  })
    .then(response => {
      const responseData = response.data;
      dispatch({
        type: FETCH_BOOKS,
        payload: responseData
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_DATA_ERROR,
        payload: error
      });
    });
};

export const addBook = (postData, history) => dispatch => {
  axios({
    method: 'post',
    url: '/api/books',
    data: postData,
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('access_token')
    }
  })
    .then(response => {
      const responseData = response.data;
      dispatch({
        type: ADD_BOOK,
        payload: responseData
      });
      history.push('/books');
    })
    .catch(error => {
      history.push('/BookForm');
      console.log(error);
    });
};
