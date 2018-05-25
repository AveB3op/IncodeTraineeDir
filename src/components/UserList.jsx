import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import User from './User';

const ListSegment = styled.div`
  padding: 5px;
  max-height: 200px;
  overflow-y: auto;
  background-color: #212326;
  box-shadow: inset  0 0 6px 2px black;  
`;

class UserList extends Component {
  render() {
    return (
      <ListSegment>
        <List>
          {this.props.userList.map(user => (
            <List.Item key={ user.email }>
              <User key={ user.email } user={ user } isCurrentUser={ this.props.currentUser.email === user.email } />
            </List.Item>
            ))}
        </List>
      </ListSegment>
    );
  }
}
UserList.propTypes = {
  userList: PropTypes.array,
  currentUser: PropTypes.object
};

export default UserList;
