import { ADD_USER, FETCH_USERS } from '../actions/types';

const initialState = {
  item: {},
  list: {}
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        item: action.payload
      };
    case FETCH_USERS:
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
}

export default userReducer;
