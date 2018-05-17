import React,{ Component } from 'react';
import { Button,Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import UserInfo from '../components/UserInfo';
import {deleteUser} from '../redux/action/actionCreators';

const mapStateToProps = state => ({
    data: state.data
});


const mapDispatchToProps = dispatch => ({
    onDeleteUser:(id)=>{
        dispatch(deleteUser(id));
        dispatch(push('/'));
    }
});


class InfoPanel extends Component {
    constructor(props){
        super(props);
        this.deleteUser = this.deleteUser.bind(this);
        this.displayUser = this.displayUser.bind(this);
    }
    deleteUser(){
        this.props.onDeleteUser(this.props.match.params.id);
    }
    displayUser(id){
        return this.props.data.find((el)=>{
            return el.address.zipCode === id;
        });
    }
    render() {

        return (
            <React.Fragment>
                <UserInfo currentUser = {this.displayUser(this.props.match.params.id)}/>
                <Segment inverted floated = 'left'>
                    <Link to={'/user/edit/'+this.props.match.params.id}>
                        <Button color="yellow">Edit user</Button>
                    </Link>
                    <Link to='/'>
                        <Button color="green">Back</Button>
                    </Link>
                    <Button color="red" onClick = {this.deleteUser}> Delete user</Button>
                </Segment>
            </React.Fragment>
        );
    }
}
InfoPanel.propTypes={
    match:PropTypes.object,
    history:PropTypes.object,
    displayUser:PropTypes.func,
    onDeleteUser:PropTypes.func,
    data:PropTypes.array
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InfoPanel);
