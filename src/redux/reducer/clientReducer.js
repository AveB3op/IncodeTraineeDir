import { ADD_CLIENT, DELETE_CLIENT, EDIT_CLIENT, GET_CLIENT_DATA, GET_CLIENT, ADD_SEARCH_FILTER } from '../action/actionTypes';

const initialState = {
  isLoading: true, allDataLoaded: false, clients: {}, ids: [], filter: ''
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLIENT:
      return { ...state, clients: { ...state.clients, ...action.client }, ids: [...state.ids, action.id] };
    case DELETE_CLIENT: {
      const newState = { ...state };
      delete newState.clients[action.id];
      return { ...newState, ids: newState.ids.filter(el => el !== action.id) }; }
    case EDIT_CLIENT:
      console.log(action.newUserData);
      return { ...state, clients: { ...state.clients, ...action.newUserData } };
    case GET_CLIENT_DATA:
      return {
        ...state, isLoading: false, clients: action.clients, ids: action.ids, allDataLoaded: true
      };
    case GET_CLIENT:
      return {
        ...state, isLoading: false, clients: { ...state.clients, ...action.client }, ids: [...state.ids, action.id]
      };
    case ADD_SEARCH_FILTER:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
};

export default clientReducer;
