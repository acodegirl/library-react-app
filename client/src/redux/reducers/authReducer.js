import { AUTHENTICATE_USER } from '../actions/types';

const initialState = {
  isAuthenticated: false
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return {
        ...state,
        isAuthenticated: action.payload
      };
    default:
      return state;
  }
}

export default authReducer;
