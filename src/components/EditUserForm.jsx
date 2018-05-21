import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class EditUserForm extends Component {
  render() {
    return (
      <Form onSubmit = { this.props.onEditUser }>

        <Form.Field>
          <label>
            First Name
            <input placeholder = "First Name" name = "fname" required defaultValue = { this.props.default.general.firstName || '' } />
          </label>
          <label>
            Last Name
            <input placeholder = "Last Name" name = "lname" defaultValue = { this.props.default.general.lastName } />
          </label>
          <label>
            Avatar link
            <input placeholder = "link" name = "avatar" defaultValue = { this.props.default.general.avatar } />
          </label>
        </Form.Field>

        <Form.Field>
          <label>
            Company name
            <input placeholder = "Company name" defaultValue = { this.props.default.job.company } />
          </label>
          <label>
            Job title
            <input placeholder = "Job title" defaultValue = { this.props.default.job.title } />
          </label>
        </Form.Field>

        <Form.Field>
          <label>
            E-mail
            <input type = "email" placeholder = "E-mail" defaultValue = { this.props.default.contact.email } />
          </label>
          <label>
            Phone number
            <input type = "tel" placeholder = "Phone number" defaultValue = { this.props.default.contact.phone } />
          </label>
        </Form.Field>

        <Form.Field>
          <label>
            Street
            <input placeholder = "Street" defaultValue = { this.props.default.address.street } />
          </label>
          <label>
            City
            <input placeholder = "City" defaultValue = { this.props.default.address.city } />
          </label>
          <label>
            Zip code
            <input placeholder = "zipCode" required defaultValue = { this.props.default.address.zipCode } />
          </label>
          <label>
            Country
            <input placeholder = "Country" defaultValue = { this.props.default.address.country } />
          </label>
        </Form.Field>

        <Form.Field>
          <Button type = "submit">
            Accept
          </Button>
          <Link to = "/">
            <Button type = "reset">
              Cancel
            </Button>
          </Link>
        </Form.Field>
      </Form>
    );
  }
}
EditUserForm.propTypes = {
  default: PropTypes.object,
  onEditUser: PropTypes.func
};
export default EditUserForm;
