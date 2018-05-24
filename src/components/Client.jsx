import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Client extends Component {
  render() {
    return (
      <Link to={ `/user/profile/${this.props.id}` }>
        <List.Item>
          <Image height="50px" avatar src={ `${this.props.client.avatar}` } alt="ava" />
          {` ${this.props.client.firstName} ${this.props.client.lastName}` }
        </List.Item>
      </Link>
    );
  }
}

Client.propTypes = {
  client: PropTypes.object,
  id: PropTypes.string
};
export default Client;
