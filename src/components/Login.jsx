import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Message = styled.div`
color: white;
margin: 20px 0;
padding-right: 30px;
padding: 5px;
text-align: right;
font-size: 16px;
float: right;
width: 100%;
background-color: darkred;
`;

class Login extends Component {
  logout = () => {
    localStorage.removeItem('token');
    this.props.onSignOut('');
  }

  render() {
    if (!localStorage.token) {
      return (
        <Message>
          <Link to="/login">
            <Button>
              Log In
            </Button>
          </Link>
          <Link to="/signup">
            <Button>
              Sign Up
            </Button>
          </Link>
        </Message>
      );
    }

    return (
      <Message>
        {`Hello, ${this.props.email} `}
        <Button onClick={ this.logout }>
          Log Out
        </Button>
      </Message>
    );
  }
}

Login.propTypes = {
  email: PropTypes.string,
  onSignOut: PropTypes.func
};

export default Login;
