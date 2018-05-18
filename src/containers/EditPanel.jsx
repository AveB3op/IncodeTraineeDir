import React,{ Component } from 'react';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EditUserForm from '../components/EditUserForm.jsx';
import { asyncEditUser } from '../redux/action/actionCreators';

class EditPanel extends Component {
    displayUser = (id)=>{
        return this.props.data.find((el)=>{
            return el.address.zipCode === id;
        });
    }
    editUser=(e)=>{
        this.props.onEditUser(this.props.match.params.id, this.formObject(e.target));
    }
    formObject(form){
        return{
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
                'street':form[7].value,
                'city': form[8].value,
                'zipCode': form[9].value,
                'country': form[10].value
            }
        };
    }
    render() {

        return (
            <Segment>
                <EditUserForm onEditUser = {this.editUser} default = {this.displayUser(this.props.match.params.id)}/>
            </Segment>
        );
    }
}
EditPanel.propTypes={
    match:PropTypes.object,
    history:PropTypes.object,
    onEditUser:PropTypes.func,
    displayUser:PropTypes.func,
    data:PropTypes.array
};

const mapDispatchToProps = dispatch => ({
    onEditUser:(userData,id)=>{
        dispatch(asyncEditUser(userData,id));
    }
});

const mapStateToProps = state =>({
    data: state.data
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditPanel);
