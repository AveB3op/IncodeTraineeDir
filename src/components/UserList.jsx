import React, { Component } from 'react';
import { Segment, List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import User from './User';

class UserList extends Component {
  render() {
    return (
      <Segment inverted floated="left">
        <List>
          {this.props.userList.map(user => (
            <List.Item key={ user.email }>
              <User key={ user.email } user={ user } />
            </List.Item>
            ))}
        </List>
      </Segment>
    );
  }
}
UserList.propTypes = {
  userList: PropTypes.array
};

export default UserList;
