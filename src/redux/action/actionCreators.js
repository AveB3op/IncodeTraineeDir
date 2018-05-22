import { push } from 'react-router-redux';
import { ADD_USER, EDIT_USER, DELETE_USER, GET_USER_DATA, GET_USER, LOADED } from './actionTypes';
import { normalizeClientList, normalizeClient } from '../../schemas/clientsList';
import url from './serverRoutes';

export function addUser(client, id) {
  return { type: ADD_USER, client, id };
}

export function asyncAddUser(userData) {
  return (dispatch) => {
    fetch(
      url.addClient,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      }
    ).then(res => res.json())
      .then((resData) => {
        const normalizedClient = normalizeClient(resData);
        dispatch(addUser(normalizedClient.client, normalizedClient.id));
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
      url.editClient + id,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUserData),
      }
    ).then(res => res.json())
      .then((resData) => {
        const normalizedClient = normalizeClient(resData);
        dispatch(editUser(normalizedClient.id, normalizedClient.client));
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
      url.deleteClient + id,
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

export function getUserData(clients, ids) {
  return { type: GET_USER_DATA, clients, ids };
}

// TODO
export function addSearchFilter(filter) {
  console.log(url.searchClients + filter);
  return dispatch => (

    fetch(
      url.searchClients + filter,
      {
        method: 'GET'
      }
    ).then(res => res.json())
      .then(clients => normalizeClientList(clients))
      .then((normalized) => {
        dispatch(getUserData(normalized.clients, normalized.ids));
      }));
}
// TODO

export function asyncGetData() {
  return (dispatch) => {
    fetch(url.getAllClients, { method: 'GET' })
      .then(res => res.json())
      .then((clientList) => {
        const normalizedClientList = normalizeClientList(clientList);
        return normalizedClientList;
      })
      .then((normalizedList) => {
        console.log(normalizedList);
        dispatch(getUserData(normalizedList.clients, normalizedList.ids));
      })
      .catch(err => console.error(err));
  };
}

export function getUser(client, id) {
  return { type: GET_USER, client, id };
}

export function loaded() {
  return { type: LOADED };
}

export function asyncGetUser(id) {
  return (dispatch) => {
    fetch(url.getClient + id, { method: 'GET' })
      .then(res => res.json())
      .then((client) => {
        const normalizedClient = normalizeClient(client);
        dispatch(getUser(normalizedClient.client, normalizedClient.id));
        dispatch(loaded());
      })
      .catch(err => console.error(err));
  };
}

export function asyncSignUp(userData) {
  console.log(userData);
  return (dispatch) => {
    fetch(
      url.signUp,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      }
    ).then(res => res.json())
      .then(() => {
        dispatch(push('/'));
      })
      .catch(err => console.error(err));
  };
}
