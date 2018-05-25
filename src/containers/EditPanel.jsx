import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import EditUserForm from '../components/EditUserForm';
import { asyncEditUser } from '../redux/action/actionCreators';

class EditPanel extends Component {
    editUser=(e) => {
      this.form = e.target;
      this.props.onEditUser(this.props.match.params.id, this.formObject());
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
      return (
        <Segment>
          <EditUserForm
            onEditUser={ this.editUser }
            default={ this.props.data.clients[this.props.match.params.id] }
          />
        </Segment>
      );
    }
}
EditPanel.propTypes = {
  match: PropTypes.object,
  onEditUser: PropTypes.func,
  data: PropTypes.object
};

const mapDispatchToProps = dispatch => ({
  onEditUser: bindActionCreators(asyncEditUser, dispatch)
});

const mapStateToProps = state => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPanel);
