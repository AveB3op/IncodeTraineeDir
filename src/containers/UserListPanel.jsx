import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import UserList from '../components/UserList';
import { switchUserStatus, asyncGetUserList, changeUser } from '../redux/action/userActionCreators';
import { addUser, editUser, deleteUser } from '../redux/action/actionCreators';
import { normalizeClient } from '../schemas/clientsList';

const Segment = styled.div`
  padding: 10px;
`;

class UserListPanel extends Component {
  componentDidMount= () => {
    this.props.getUserList();

    const socket = new WebSocket(`ws:${process.env.REACT_APP_WS_HOST}`);
    this.socket = socket;
    socket.onopen = () => {
      console.log('Connected.');
      if (localStorage.token) { socket.send(localStorage.token); }
    };

    socket.onclose = (event) => {
      if (event.wasClean) {
        console.log('Closed');
      } else {
        console.log('Aborted');
      }
      console.log(`Code: ${event.code} reason: ${event.reason}`);
    };

    socket.onmessage = (event) => {
      if (!this.props.users.isLoading) {
        let normalizedClient = {};
        const data = JSON.parse(event.data);
        if (data.client) {
          normalizedClient = normalizeClient(data.client);
        }
        switch (data.type) {
          case 'add':
            this.props.onAddUser(normalizedClient.client, normalizedClient.id);
            break;
          case 'edit':
            this.props.onEditUser(normalizedClient.id, normalizedClient.client);
            break;
          case 'delete':
            this.props.onDeleteUser(data.id);
            break;
          case 'disconnected':
            this.props.switchStatus(data.token, false);
            break;
          case 'connected':
            this.props.users.userList.forEach((el) => {
              if (el.email === data.token.email && !el.online) {
                this.props.switchStatus(data.token, true);
              }
            });
            break;
          case 'connect':
            this.props.onConnect(data.email);
            break;
          default:
            console.log(event.type);
        }
      }
    };

    socket.onerror = (error) => {
      alert(`Error : ${error.message}`);
    };
  }

  componentWillUnmount() {
    this.socket.close();
  }

  render() {
    if (!this.props.users.isLoading) {
      return (
        <Segment>
          <UserList userList={ this.props.users.userList } currentUser={ this.props.users.user } />
        </Segment>
      );
    }
    return (
      <Segment>
        Loading...
      </Segment>
    );
  }
}


UserListPanel.propTypes = {
  users: PropTypes.object,
  onAddUser: PropTypes.func,
  onEditUser: PropTypes.func,
  onDeleteUser: PropTypes.func,
  getUserList: PropTypes.func,
  onConnect: PropTypes.func,
  switchStatus: PropTypes.func
};

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  getUserList: bindActionCreators(asyncGetUserList, dispatch),
  switchStatus: bindActionCreators(switchUserStatus, dispatch),
  onEditUser: bindActionCreators(editUser, dispatch),
  onDeleteUser: bindActionCreators(deleteUser, dispatch),
  onAddUser: bindActionCreators(addUser, dispatch),
  onConnect: bindActionCreators(changeUser, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserListPanel);
