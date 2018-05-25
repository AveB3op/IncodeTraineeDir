import { GET_USER_LIST, SWITCH_STATUS, CHANGE_USER } from '../action/actionTypes';

const initialState = {
  userList: [],
  user: {},
  isLoading: true
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST:
      return { ...state, userList: [...action.userList], isLoading: false };
    case SWITCH_STATUS:
      return {
        ...state,
        userList: state.userList.map((el) => {
          if (el.email === action.userData.email) {
            return { ...el, online: action.status };
          }
          return el;
        })
      };
    case CHANGE_USER:
      return { ...state, user: { ...state.user, email: action.email } };
    default:
      return state;
  }
};

export default userReducer;
