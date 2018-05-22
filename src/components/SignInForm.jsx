import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// TODO
class signInForm extends Component {
  render() {
    return (
      <Form onSubmit={ this.props.onAddUser }>

        <Form.Field>
          <label>
            First Name
            <input placeholder="First Name" name="fname" required />
          </label>
          <label>
            Last Name
            <input placeholder="Last Name" name="lname" />
          </label>
          <label>
            Avatar link
            <input placeholder="link" name="avatar" />
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
signInForm.propTypes = {
  onAddUser: PropTypes.func
};
export default signInForm;
