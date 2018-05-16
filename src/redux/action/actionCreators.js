import {ADD_USER, EDIT_USER, DELETE_USER} from './actionTypes';

export function addUser(userData) {
    return { type: ADD_USER, userData };
}

export function editUser(id, newUserData) {
    return { type: EDIT_USER, newUserData, id };
}

export function deleteUser(id) {
    return { type: DELETE_USER, id };
}
