import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authenticateUser } from '../../redux/actions/auth';

function Login() {
  const [state, setState] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  //const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    localStorage.removeItem('access-token');
  }, []);

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };

  /*
   * Validate the following,
   * (1) email format &
   * (2) password
   */
  const validate = () => {
    const regex_email = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
    if (!regex_email.test(state.email)) {
      setError('Invalid Email');
    } else if (state.password.trim().length < 6) {
      setError('Password should be minimum length of 6 characters');
    } else {
      setError('');
      return true;
    }
    return false;
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (validate()) {
      const postData = { email: state.email, password: state.password };
      dispatch(authenticateUser(postData, history));
    }
  };

  return (
    <div className='login-wrapper'>
      <h1 className='heading'>Log in to Library portal</h1>
      <div className='login'>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type='text'
            name='email'
            placeholder='Email'
            value={state.email}
            onChange={handleChange}
          />
          <label>Password:</label>
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={state.password}
            onChange={handleChange}
          />
          <h4>{error}</h4>
          <button className='submit'>Log in</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
