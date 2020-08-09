import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addBook } from '../redux/actions/bookActions';

/*
 * Renders Book Addition form
 */
function BookForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [state, setState] = useState({
    name: '',
    author: '',
    genre: ''
  });
  const [error, setError] = useState('');

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };

  // Validate user input
  const validate = () => {
    if (!state.name) {
      setError('Name is mandatory');
    } else if (state.name.trim().length < 4) {
      setError('Name should be minimum length of 4');
    } else if (!state.author) {
      setError('Author is mandatory');
    } else if (state.author.trim().length < 4) {
      setError('Author should be minimum length of 4');
    } else if (!state.genre) {
      setError('Genre is mandatory');
    } else if (state.genre.trim().length < 4) {
      setError('Genre should be minimum length of 4 characters');
    } else {
      setError('');
      return true;
    }
    return false;
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (validate()) {
      const postData = {
        name: state.name,
        author: state.author,
        genre: state.genre
      };
      dispatch(addBook(postData, history));
    }
  }

  return (
    <div className='user-wrapper'>
      <h1 className='heading'>Add new book</h1>
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
          <label>Author:</label>
          <input
            type='text'
            name='author'
            placeholder='Author'
            value={state.author}
            onChange={handleChange}
          />
          <label>Genre:</label>
          <input
            type='text'
            name='genre'
            placeholder='Genre'
            value={state.genre}
            onChange={handleChange}
          />
          <h4>{error}</h4>
          <button className='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default BookForm;
