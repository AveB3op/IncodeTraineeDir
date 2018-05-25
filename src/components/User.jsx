import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Status = styled.div`
  height: 10px;
  width: 10px;
  border: 1px solid;
  border-radius: 50%;
  background-color: ${props => ((props.online || props.isCurrentUser) ? (props.isCurrentUser ? '#00f7ff' : '#22ee44') : '#f91d1d')};
  margin-top: 10px;
  margin-left: 5px;
  float: right;
`;
const Wrapper = styled.div`
  margin: 5px;
  background-color: #373741;
  padding: 8px 13px;
  box-shadow: 0 0 5px 2px black;
`;

class User extends Component {
  render() {
    return (
      <Wrapper>
        <Image height="50px" avatar src="http://via.placeholder.com/350x150" alt="ava" />
        {` ${this.props.user.email} ${this.props.user.userName}` }
        <Status online={ this.props.user.online } isCurrentUser={ this.props.isCurrentUser } />
      </Wrapper>
    );
  }
}
User.propTypes = {
  user: PropTypes.object,
  isCurrentUser: PropTypes.bool
};

export default User;
