import React,{ Component } from 'react';
import { Button,Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import InfoPanel from '../components/InfoPanel';
import {deleteUser} from '../redux/action/actionCreators';

const mapStateToProps = state => ({
    data: state.data
});


const mapDispatchToProps = dispatch => ({
    onDeleteUser:(id)=>{
        dispatch(deleteUser(id));
    }
});


class UserInfo extends Component {
    constructor(props){
        super(props);
        this.deleteUser = this.deleteUser.bind(this);
        this.displayUser = this.displayUser.bind(this);
    }
    deleteUser(){
        this.props.onDeleteUser(this.props.match.params.id);
        this.props.history.push('/');
    }
    displayUser(id){
        return this.props.data.find((el)=>{
            return el.address.zipCode === id;
        });
    }
    render() {

        return (
            <React.Fragment>
                <InfoPanel currentUser = {this.displayUser(this.props.match.params.id)}/>
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
UserInfo.propTypes={
    match:PropTypes.object,
    history:PropTypes.object,
    displayUser:PropTypes.func,
    onDeleteUser:PropTypes.func,
    data:PropTypes.array
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserInfo);
