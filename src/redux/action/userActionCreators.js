import { GET_USER_LIST, SWITCH_STATUS } from './actionTypes';
import url from './serverRoutes';

export function getUserList(userList) {
  return { type: GET_USER_LIST, userList };
}

export function switchUserStatus(userData) {
  return { type: SWITCH_STATUS, userData };
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
        console.log(userData);
        console.log(userData);
        dispatch(getUserList(userData));
      })
      .catch((err) => {
        alert(`Forbidden. Error code:${err}`);
      });
  };
}
