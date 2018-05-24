import { GET_USER_LIST, SWITCH_STATUS } from '../action/actionTypes';

const initialState = {
  userList: [],
  user: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST:
      return { ...state, userList: [...action.userList] };
    case SWITCH_STATUS:
      return { ...state, clients: { ...state.clients, ...action.client }, ids: [...state.ids, action.id] };
    default:
      return state;
  }
};

export default userReducer;
