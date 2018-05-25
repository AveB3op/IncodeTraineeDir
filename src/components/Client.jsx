import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  padding: 5px;
  margin: 15px 5px;
  box-shadow: 0 0 5px 1px black;
  background-color: #2f3139;
  a{
    color: #efefef;
  }
`;

class Client extends Component {
  render() {
    return (
      <Wrapper>
        <Link to={ `/user/profile/${this.props.id}` }>
          <List.Item>
            <Image height="50px" avatar src={ `${this.props.client.avatar}` } alt="ava" />
            {` ${this.props.client.firstName} ${this.props.client.lastName}` }
          </List.Item>
        </Link>
      </Wrapper>
    );
  }
}

Client.propTypes = {
  client: PropTypes.object,
  id: PropTypes.string
};
export default Client;
