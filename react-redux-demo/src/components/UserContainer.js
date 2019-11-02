import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux';

function UserContainer() {
  const state = useSelector(state => state.user);
  const dispatch = useDispatch();

  const fetchUsersByUrl = () => {
    dispatch(
      fetchUsers(
        'http://www.mocky.io/v2/5dbde7a33300000e9516a2b7?mocky-delay=2000ms'
      )
    );
  };

  const userNames = state.users.map(u => u.name);
  return (
    <div>
      <h2>User List</h2>
      <div>{state.loading ? 'Loading...' : ''}</div>
      <div className="danger">{state.error}</div>
      <div>
        {state.users.map(element => {
          return (
            <div>
              {element.name} {element.email}
            </div>
          );
        })}
      </div>
      <button onClick={fetchUsersByUrl}>Fetch Users</button>
    </div>
  );
}

export default UserContainer;
