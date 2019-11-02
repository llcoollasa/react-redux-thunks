import axios from 'axios';

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILIURE,
} from './userTypes';

export const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUserSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUserFailure = error => {
  return {
    type: FETCH_USERS_FAILIURE,
    payload: error,
  };
};

export const fetchUsers = url => {
  return function(dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get(url)
      .then(res => {
        const users = res.data.map(user => user);
        dispatch(fetchUserSuccess(users));
      })
      .catch(err => {
        dispatch(fetchUserFailure(err.message));
      });
  };
};
