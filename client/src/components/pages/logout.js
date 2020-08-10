import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AUTHENTICATE_USER } from '../../redux/actions/types';

/*
 * Removes JWT token
 */
export default function Logout() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    localStorage.removeItem('access_token');
    dispatch({ type: AUTHENTICATE_USER, payload: false });
    history.push('/');
  }, [dispatch, history]);

  return null;
}
