import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Login from '../components/Login';
import { changeUser } from '../redux/action/userActionCreators';


class LoginPanel extends Component {
  render() {
    return (
      <Login email={ this.props.email } onSignOut={ this.props.onSignOut } />
    );
  }
}
LoginPanel.propTypes = {
  email: PropTypes.string,
  onSignOut: PropTypes.func
};

const mapStateToProps = state => ({
  email: state.users.user.email
});

const mapDispatchToProps = dispatch => ({
  onSignOut: bindActionCreators(changeUser, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPanel);
