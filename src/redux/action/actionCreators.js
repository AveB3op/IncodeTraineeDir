import { push } from 'react-router-redux';
import {ADD_USER, EDIT_USER, DELETE_USER, ADD_SEARCH_FILTER, GET_USER_DATA} from './actionTypes';
import data from '../../clients.json';

const serverDelay = 2000;

export function asyncAddUser(userData){
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(addUser(userData));
            dispatch(push('/'));
        }, serverDelay);
    };
}

export function addUser(userData) {
    return { type: ADD_USER, userData };
}

export function asyncEditUser(id, newUserData){
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(editUser(id, newUserData));
            dispatch(push('/'));
        }, serverDelay);
    };
}


export function editUser(id, newUserData) {
    return { type: EDIT_USER, newUserData, id };
}

export function asyncDeleteUser(id){
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(push('/'));
            dispatch(deleteUser(id));
        }, serverDelay);
    };
}

export function deleteUser(id) {
    return { type: DELETE_USER, id };
}

export function addSearchFilter(filter) {
    return {type: ADD_SEARCH_FILTER, filter };
}

export function asyncGetData(){
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(getUserData(data));
        }, serverDelay);
    };
}

export function getUserData(data){
    return {type: GET_USER_DATA, data };
}
