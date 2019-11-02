const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const initialState = {
  loading: false,
  users: [],
  error: '',
};

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILIURE = 'FETCH_USERS_FAILIURE';

const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUserSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUserFailure = error => {
  return {
    type: FETCH_USERS_FAILIURE,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        users: action.payload,
      };
    case FETCH_USERS_FAILIURE:
      return {
        ...state,
        loading: false,
        error: '',
        error: action.payload,
      };
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    default:
      break;
  }
};

const fetchUsers = () => {
  return function(dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const users = res.data.map(user => user.id);
        dispatch(fetchUserSuccess(users));
      })
      .catch(err => {
        dispatch(fetchUserFailure(err.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchUsers());
