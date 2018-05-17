import data from '../../clients.json';
import {ADD_USER, DELETE_USER, EDIT_USER, GET_USER_DATA } from '../action/actionTypes';

const initialState = [];

const userReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_USER:
        return [...state, action.userData];
    case DELETE_USER:
        return state.filter((el)=>{
            return el.address.zipCode===action.id? false : true;
        });
    case EDIT_USER:
        return state.map((el)=>{
            if(el.address.zipCode===action.id){
                return action.newUserData;
            } else{
                return el;
            }
        });
    case GET_USER_DATA:
        return data;
    default:
        return state;
    }
};

export default userReducer;
