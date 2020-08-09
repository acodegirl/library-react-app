import { ADD_BOOK, FETCH_BOOKS } from '../actions/types';

const initialState = {
  item: {},
  list: {}
};

function bookReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        item: action.payload
      };
    case FETCH_BOOKS:
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
}

export default bookReducer;
