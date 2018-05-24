import {} from '../action/actionTypes';

const initialState = {
  userList: [],
  user: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, clients: { ...state.clients, ...action.client }, ids: [...state.ids, action.id] };

    default:
      return state;
  }
};

export default userReducer;
