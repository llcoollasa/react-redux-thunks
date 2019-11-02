import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILIURE,
} from './userTypes';

const initialState = {
  loading: false,
  users: [],
  error: '',
};

const userReducer = (state = initialState, action) => {
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
        error: action.payload,
      };
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default userReducer;
