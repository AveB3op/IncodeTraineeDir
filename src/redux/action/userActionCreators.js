import { GET_USER_LIST, SWITCH_STATUS, CHANGE_USER } from './actionTypes';
import url from './serverRoutes';

export function getUserList(userList) {
  return { type: GET_USER_LIST, userList };
}

export function switchUserStatus(userData, status) {
  return { type: SWITCH_STATUS, userData, status };
}

export function asyncGetUserList() {
  return (dispatch) => {
    fetch(
      url.getUserList,
      {
        method: 'GET'
      }
    ).then((res) => {
      if (res.status !== 200) {
        throw res.status;
      }
      return res.json();
    })
      .then((userData) => {
        dispatch(getUserList(userData.map(el => ({ ...el, online: false }))));
      })
      .catch((err) => {
        alert(`Forbidden. Error code:${err}`);
      });
  };
}
export function changeUser(email) {
  return { type: CHANGE_USER, email };
}
