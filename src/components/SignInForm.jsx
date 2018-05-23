import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// TODO
class SignInForm extends Component {
  render() {
    return (
      <Form onSubmit={ this.props.onSubmit }>

        <Form.Field>
          <label>
            E-mail
            <input type="email" placeholder="E-mail" name="email" required />
          </label>
          <label>
            Password
            <input placeholder="password" name="password" required />
          </label>
        </Form.Field>


        <Form.Field>
          <Button type="submit">
            Login
          </Button>
          <Link to="/">
            <Button type="reset">
              Cancel
            </Button>
          </Link>
        </Form.Field>
      </Form>
    );
  }
}
SignInForm.propTypes = {
  onSubmit: PropTypes.func
};
export default SignInForm;
