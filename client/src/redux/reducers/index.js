import { combineReducers } from 'redux';
import userReducer from './userReducer';
import bookReducer from './bookReducer';
import authReducer from './authReducer';

export default combineReducers({
  user: userReducer,
  book: bookReducer,
  auth: authReducer
});
