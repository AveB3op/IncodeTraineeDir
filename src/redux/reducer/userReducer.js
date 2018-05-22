import { ADD_USER, DELETE_USER, EDIT_USER, GET_USER_DATA, GET_USER, ADD_SEARCH_FILTER } from '../action/actionTypes';

const initialState = {
  isLoading: true, allDataLoaded: false, clients: {}, ids: [], filter: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, clients: { ...state.clients, ...action.client }, ids: [...state.ids, action.id] };
    case DELETE_USER: {
      const newState = { ...state };
      delete newState.clients[action.id];
      return { ...newState, ids: newState.ids.filter(el => el !== action.id) }; }
    case EDIT_USER:
      console.log(action.newUserData);
      return { ...state, clients: { ...state.clients, ...action.newUserData } };
    case GET_USER_DATA:
      return {
        ...state, isLoading: false, clients: action.clients, ids: action.ids, allDataLoaded: true
      };
    case GET_USER:
      return {
        ...state, isLoading: false, clients: { ...state.clients, ...action.client }, ids: [...state.ids, action.id]
      };
    case ADD_SEARCH_FILTER:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
};

export default userReducer;
