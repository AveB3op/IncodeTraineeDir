import React, { Component } from 'react';
import { Image, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class UserList extends Component {
  render() {
    return (
      <Segment inverted floated="left">
        <Image height="50px" avatar src= "http://via.placeholder.com/350x150" alt="ava" />
        {` ${this.props.user.email} ${this.props.user.userName}` }
      </Segment>
    );
  }
}
UserList.propTypes = {
  user: PropTypes.object
};

export default UserList;
