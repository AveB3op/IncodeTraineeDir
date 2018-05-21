import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddUserForm from '../components/AddUserForm';
import { asyncAddUser } from '../redux/action/actionCreators';


class AddUserPanel extends Component {
    addUser = (e) => {
      this.form = e.target;
      this.props.onAddUser(this.formObject());
    }

    formObject() {
      return {
        general: {
          firstName: this.form[0].value,
          lastName: this.form[1].value,
          avatar: this.form[2].value
        },
        job: {
          company: this.form[3].value,
          title: this.form[4].value
        },
        contact: {
          email: this.form[5].value,
          phone: this.form[6].value
        },
        address: {
          street: this.form[7].value,
          city: this.form[8].value,
          zipCode: this.form[9].value,
          country: this.form[10].value
        }
      };
    }

    render() {
      return (<AddUserForm onAddUser={ this.addUser } />);
    }
}

AddUserPanel.propTypes = {
  onAddUser: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onAddUser: bindActionCreators(asyncAddUser, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(AddUserPanel);
