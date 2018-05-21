import { ADD_USER, DELETE_USER, EDIT_USER, GET_USER_DATA, GET_USER } from '../action/actionTypes';

const initialState = [];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.userData];
    case DELETE_USER:
      return state.filter(el => el._id !== action.id);
    case EDIT_USER:
      return state.map((el) => {
        if (el._id === action.id) {
          return action.newUserData;
        }
        return el;
      });
    case GET_USER_DATA:
      return action.data;
    case GET_USER:
      return [action.data];
    default:
      return state;
  }
};

export default userReducer;
