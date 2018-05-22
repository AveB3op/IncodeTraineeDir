import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SignUpForm extends Component {
  render() {
    return (
      <Form onSubmit={ this.props.onSubmit }>

        <Form.Field>
          <label>
           Name
            <input placeholder="name" name="name" required />
          </label>
          <label>
            E-mail
            <input type="email" placeholder="E-mail" name="email" required />
          </label>
          <label>
            Password
            <input placeholder="password" name="password" required />
          </label>
          <label>
            Password confirm
            <input placeholder="password" name="passwordC" required />
          </label>
        </Form.Field>


        <Form.Field>
          <Button type="submit">
            Accept
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
SignUpForm.propTypes = {
  onSubmit: PropTypes.func
};
export default SignUpForm;
