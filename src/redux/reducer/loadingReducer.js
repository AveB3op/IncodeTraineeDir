import { LOADED } from '../action/actionTypes';

const initialState = { isLoading: true };

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return { isLoading: false };
    default:
      return state;
  }
};

export default loadingReducer;
