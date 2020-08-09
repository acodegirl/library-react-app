import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchBooks } from '../../redux/actions/bookActions';

/*
 *  Renders list of Books from redux store,
 *  which inturn gets data populated from DB
 */
export default function Books() {
  const dispatch = useDispatch();
  const history = useHistory();
  const bookData = Array.from(useSelector(state => state.book.list));

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleClick = () => {
    history.push('/BookForm');
  };

  // Dynamic table population - Books data
  const renderBookList = () => {
    return bookData.map((book, index) => {
      const { id, name, author, genre } = book;
      return (
        <tr key={id}>
          <td>{index + 1}</td>
          <td>{name}</td>
          <td>{author}</td>
          <td>{genre}</td>
        </tr>
      );
    });
  };

  return (
    <div className='users-wrapper'>
      <div className='button-wrapper'>
        <button className='add-button' onClick={handleClick}>
          Add Book
        </button>
      </div>
      <h1 className='summary-text'>Books List</h1>
      <table className='users-list'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Author</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>{renderBookList()}</tbody>
      </table>
    </div>
  );
}
