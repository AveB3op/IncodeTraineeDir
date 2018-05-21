import { ADD_SEARCH_FILTER } from '../action/actionTypes';

const initialState = '';

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SEARCH_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default searchReducer;
