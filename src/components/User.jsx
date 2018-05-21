import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class User extends Component {
  render() {
    return (
      <Link to={ `/user/profile/${this.props.id}` }>
        <List.Item>
          <Image height="50px" avatar src={ `${this.props.user.avatar}` } alt="ava" />
          {` ${this.props.user.firstName} ${this.props.user.lastName}` }
        </List.Item>
      </Link>
    );
  }
}

User.propTypes = {
  user: PropTypes.object,
  id: PropTypes.string
};
export default User;
