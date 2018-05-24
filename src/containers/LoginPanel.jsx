import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser, editUser, deleteUser } from '../redux/action/actionCreators';
import { normalizeClient } from '../schemas/clientsList';
import Login from '../components/Login';

class LoginPanel extends Component {
  componentDidMount= () => {
    const socket = new WebSocket(`ws:${process.env.REACT_APP_WS_HOST}`);
    this.socket = socket;
    socket.onopen = () => {
      console.log('Connected.');
      this.socket.send('testMessage');
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
        case 'message':
          console.log(data);
          break;
        default:
          console.log(event.type);
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
    return (<Login />);
  }
}

LoginPanel.propTypes = {
  onAddUser: PropTypes.func,
  onEditUser: PropTypes.func,
  onDeleteUser: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  onEditUser: bindActionCreators(editUser, dispatch),
  onDeleteUser: bindActionCreators(deleteUser, dispatch),
  onAddUser: bindActionCreators(addUser, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(LoginPanel);
