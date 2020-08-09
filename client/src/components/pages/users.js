import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../redux/actions/userActions';

/*
 *  Renders list of Users from redux store,
 *  which inturn gets data populated from DB
 */
export default function Users() {
  const dispatch = useDispatch();
  const userData = Array.from(useSelector(state => state.user.list));

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Dynamic table population - Users data
  const renderUserList = () => {
    return userData.map((user, index) => {
      const { id, name, email, mobile } = user;
      return (
        <tr key={id}>
          <td>{index + 1}</td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{mobile}</td>
        </tr>
      );
    });
  };

  return (
    <div className='users-wrapper'>
      <h1 className='summary-text'>Users List</h1>
      <table className='users-list'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>{renderUserList()}</tbody>
      </table>
    </div>
  );
}
