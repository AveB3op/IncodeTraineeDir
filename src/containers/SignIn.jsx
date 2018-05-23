import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { asyncSignIn } from '../redux/action/actionCreators';
import SignInForm from '../components/SignInForm';
// // TODO:

class SignIn extends Component {
  onSubmit = (e) => {
    this.form = e.target;
    this.props.onSignIn(this.formObject());
  }

    formObject = () => ({
      email: this.form.email.value,
      password: this.form.password.value
    });


    render() {
      return (
        <SignInForm onSubmit={ this.onSubmit } />
      );
    }
}
SignIn.propTypes = {
  onSignIn: PropTypes.func
};

const mapStateToProps = state => ({
  data: state.data
});

const mapDispatchToProps = dispatch => ({
  onSignIn: bindActionCreators(asyncSignIn, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
