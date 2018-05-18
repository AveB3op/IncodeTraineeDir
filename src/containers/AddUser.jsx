import React, {Component} from 'react';
import AddUserForm from '../components/AddUserForm.jsx';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {asyncAddUser} from '../redux/action/actionCreators';

class AddUser extends Component {
    addUser=(e)=>{
        this.props.onAddUser(this.formObject(e.target));
    }

    formObject(form) {
        return {
            'general': {
                'firstName': form[0].value,
                'lastName': form[1].value,
                'avatar': form[2].value
            },
            'job': {
                'company': form[3].value,
                'title': form[4].value
            },
            'contact': {
                'email': form[5].value,
                'phone': form[6].value
            },
            'address': {
                'street': form[7].value,
                'city': form[8].value,
                'zipCode': form[9].value,
                'country': form[10].value
            }
        };
    }
    render() {
        return (<AddUserForm onAddUser={this.addUser}/>);
    }
}

AddUser.propTypes={
    onAddUser:PropTypes.func,
    history: PropTypes.object,

};

const mapDispatchToProps = dispatch => ({
    onAddUser:bindActionCreators(asyncAddUser,dispatch)
});

export default connect(
    null,
    mapDispatchToProps
)(AddUser);
