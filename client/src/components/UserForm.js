import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addUser } from '../redux/actions/userActions';

/*
 * Renders User Registration form
 */
function UserForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [state, setState] = useState({
    name: '',
    email: '',
    mobile: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };

  // Validate User inputs
  const validate = () => {
    const regex_email = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
    const regex_mobile = /^([+]\d{2})?\d{10}$/;
    if (!state.name) {
      setError('Name is mandatory');
    } else if (state.name.trim().length < 3) {
      setError('Name should be minimum length of 3');
    } else if (state.mobile !== '' && !regex_mobile.test(state.mobile)) {
      setError('Invalid Mobile Number');
    } else if (!regex_email.test(state.email)) {
      setError('Invalid Email');
    } else if (state.password.trim().length < 6) {
      setError('Password should be minimum length of 6 characters');
    } else {
      setError('');
      return true;
    }
    return false;
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (validate()) {
      const postData =
        state.mobile !== ''
          ? {
              name: state.name,
              mobile: state.mobile,
              email: state.email,
              password: state.password
            }
          : {
              name: state.name,
              email: state.email,
              password: state.password
            };
      dispatch(addUser(postData, history));
    }
  }

  return (
    <div className='user-wrapper'>
      <h1 className='heading'>Create your account</h1>
      <div className='user'>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={state.name}
            onChange={handleChange}
          />
          <label>Email:</label>
          <input
            type='text'
            name='email'
            placeholder='Email'
            value={state.email}
            onChange={handleChange}
          />
          <label>Mobile number:</label>
          <input
            type='text'
            name='mobile'
            placeholder='Mobile Number'
            value={state.mobile}
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
          <button className='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
