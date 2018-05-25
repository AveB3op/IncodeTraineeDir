import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  padding: 10px;
  box-shadow: 0 0 5px 1px black;
`;

class SignInForm extends Component {
  render() {
    return (
      <Wrapper>

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
      </Wrapper>
    );
  }
}
SignInForm.propTypes = {
  onSubmit: PropTypes.func
};
export default SignInForm;
