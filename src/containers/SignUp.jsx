import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import SignUpForm from '../components/SignUpForm';
import { asyncSignUp } from '../redux/action/actionCreators';


class SignUp extends Component {
  onSubmit = (e) => {
    if (e.target.password.value === e.target.passwordC.value) {
      this.form = e.target;
      this.props.onSignUp(this.formObject());
    } else {
      e.target.reset();
      alert('Password don\'t match');
    }
  }

  formObject = () => ({
    userName: this.form.name.value,
    password: this.form.password.value,
    email: this.form.email.value
  })

  render() {
    return (
      <SignUpForm onSubmit={ this.onSubmit } />
    );
  }
}
SignUp.propTypes = {
  onSignUp: PropTypes.func
};

const mapStateToProps = state => ({
  data: state.data
});

const mapDispatchToProps = dispatch => ({
  onSignUp: bindActionCreators(asyncSignUp, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
