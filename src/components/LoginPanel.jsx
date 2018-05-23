import React, { Component } from 'react';
import { Button, Segment, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class LoginPanel extends Component {
  logout = () => {
    localStorage.removeItem('token');
    this.forceUpdate();
  }

  render() {
    if (!localStorage.token) {
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

    return (
      <Segment inverted textAlign="right">
        <Button onClick={ this.logout }>
            Log Out
        </Button>
      </Segment>
    );
  }
}

export default LoginPanel;
