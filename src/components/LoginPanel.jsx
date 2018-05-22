import React, { Component } from 'react';
import { Button, Segment, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class LoginPanel extends Component {
  render() {
    return (
      <Header>
        <Segment inverted textAlign="right">
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
        </Segment>
      </Header>
    );
  }
}

export default LoginPanel;
