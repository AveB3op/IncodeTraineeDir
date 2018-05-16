import data from '../../clients.json';
import {ADD_USER, DELETE_USER, EDIT_USER} from '../action/actionTypes';
const initialState = {
    data
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_USER:
        return {
            ...state,
            data: [...state.data, action.userData]
        };
    case DELETE_USER:
        return {
            ...state,
            data: state.data.filter((el)=>{
                return el.address.zipCode===action.id? false : true;
            })};
    case EDIT_USER:
        return {
            ...state,
            data: state.data.map((el)=>{
                if(el.address.zipCode===action.id){
                    return action.newUserData;
                } else{
                    return el;
                }
            })
        };
    default:
        return state;
    }
};

export default rootReducer;