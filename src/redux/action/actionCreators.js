import {ADD_USER, EDIT_USER, DELETE_USER, ADD_SEARCH_FILTER} from './actionTypes';

export function addUser(userData) {
    return { type: ADD_USER, userData };
}

export function editUser(id, newUserData) {
    return { type: EDIT_USER, newUserData, id };
}

export function deleteUser(id) {
    return { type: DELETE_USER, id };
}

export function addSearchFilter(filter) {
    return {type: ADD_SEARCH_FILTER, filter };
}
