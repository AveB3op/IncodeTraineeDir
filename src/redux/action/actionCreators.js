import { push } from 'react-router-redux';
import { ADD_USER, EDIT_USER, DELETE_USER, GET_USER_DATA, GET_USER, LOADED } from './actionTypes';

const serverUrl = 'http://127.0.0.1:8080/';

export function addUser(userData) {
  return { type: ADD_USER, userData };
}

export function asyncAddUser(userData) {
  return (dispatch) => {
    fetch(
      `${serverUrl}addClient`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      }
    ).then(res => res.json())
      .then((resData) => {
        dispatch(addUser(resData));
        dispatch(push('/'));
      })
      .catch(err => console.log(err));
  };
}

export function editUser(id, newUserData) {
  return { type: EDIT_USER, newUserData, id };
}

export function asyncEditUser(id, newUserData) {
  return (dispatch) => {
    fetch(
      `${serverUrl}editClient/${id}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUserData),
      }
    ).then(res => res.json())
      .then((resData) => {
        dispatch(editUser(resData));
        dispatch(push('/'));
      })
      .catch(err => console.log(err));
  };
}

export function deleteUser(id) {
  return { type: DELETE_USER, id };
}

export function asyncDeleteUser(id) {
  return (dispatch) => {
    console.log(id);
    fetch(
      `${serverUrl}deleteClient/${id}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'text/plain' },
      }
    ).then((res) => {
      console.log(res.text);
      dispatch(push('/'));
      dispatch(deleteUser(id));
    });
  };
}

export function getUserData(data) {
  return { type: GET_USER_DATA, data };
}

// TODO
export function addSearchFilter(filter) {
  console.log(`${serverUrl}user/search/${filter}`);
  return dispatch => (

    fetch(
      `${serverUrl}user/search/${filter}`,
      {
        method: 'GET'
      }
    ).then(res => res.json())
      .then((clientList) => { dispatch(getUserData(clientList)); }));
}
// TODO

export function asyncGetData() {
  return (dispatch) => {
    fetch(`${serverUrl}getClients`, { method: 'GET' })
      .then(res => res.json())
      .then((clientList) => { dispatch(getUserData(clientList)); })
      .catch(err => console.log(err));
  };
}

export function getUser(data) {
  return { type: GET_USER, data };
}

export function loaded() {
  return { type: LOADED };
}

export function asyncGetUser(id) {
  console.log(id);
  return (dispatch) => {
    fetch(`${serverUrl}getClient/${id}`, { method: 'GET' })
      .then(res => res.json())
      .then((client) => {
        console.log(client);
        dispatch(getUser(client));
        dispatch(loaded());
      })
      .catch(err => console.log(err));
  };
}
