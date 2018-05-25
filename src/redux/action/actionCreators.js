import { push } from 'react-router-redux';
import { ADD_CLIENT, EDIT_CLIENT, DELETE_CLIENT, GET_CLIENT_DATA, GET_CLIENT, LOADED } from './actionTypes';
import { normalizeClientList, normalizeClient } from '../../schemas/clientsList';
import { changeUser} from './userActionCreators';
import url from './serverRoutes';

export function addUser(client, id) {
  return { type: ADD_CLIENT, client, id };
}

export function asyncAddClient(userData) {
  return (dispatch) => {
    fetch(
      url.addClient,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.token}` },
        body: JSON.stringify(userData),
      }
    ).then((res) => {
      if (res.status !== 200) {
        throw res.status;
      }
      return res.json();
    })
      .then(() => {
        dispatch(push('/'));
      })
      .catch((err) => {
        alert(`Forbidden. Error code:${err}`);
      });
  };
}

export function editUser(id, newUserData) {
  console.log('Edituser');
  return { type: EDIT_CLIENT, newUserData, id };
}

export function asyncEditUser(id, newUserData) {
  return (dispatch) => {
    fetch(
      url.editClient + id,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.token}` },
        body: JSON.stringify(newUserData),
      }
    ).then((res) => {
      if (res.status !== 200) {
        throw res.status;
      }
      return res.json();
    })
      .then(() => {
        dispatch(push('/'));
      })
      .catch((err) => {
        alert(`Forbidden. Error code:${err}`);
      });
  };
}

export function deleteUser(id) {
  return { type: DELETE_CLIENT, id };
}

export function asyncDeleteUser(id) {
  return (dispatch) => {
    console.log(id);
    fetch(
      url.deleteClient + id,
      {
        method: 'GET',
        headers: { 'Content-Type': 'text/plain', Authorization: `Bearer ${localStorage.token}` },
      }
    ).then((res) => {
      if (res.status !== 200) {
        throw res.status;
      }
      console.log(res.text);
      dispatch(push('/'));
    })
      .catch((err) => {
        alert(`You must be admin. Error code:${err}`);
      });
  };
}

export function getUserData(clients, ids) {
  return { type: GET_CLIENT_DATA, clients, ids };
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
  return { type: GET_CLIENT, client, id };
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
    ).then(res => res.text())
      .then((resText) => {
        console.log(resText);
        localStorage.setItem('token', resText);
        dispatch(changeUser(userData.email));
        dispatch(push('/'));
      })
      .catch(err => console.error(err));
  };
}

export function asyncSignIn(userData) {
  console.log(userData);
  return (dispatch) => {
    fetch(
      url.signIn,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      }
    ).then((res) => {
      if (res.status === 200) {
        return res.text();
      }
      throw res.text;
    })
      .then((token) => {
        localStorage.setItem('token', token);
        dispatch(changeUser(userData.email));
        dispatch(push('/'));
      })
      .catch(err => console.error(err));
  };
}
