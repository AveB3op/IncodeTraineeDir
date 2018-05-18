import React,{ Component } from 'react';
import { Button,Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import UserInfo from '../components/UserInfo';
import {asyncDeleteUser} from '../redux/action/actionCreators';

class InfoPanel extends Component {
    deleteUser=()=>{
        this.props.onDeleteUser(this.props.match.params.id);
    }
    displayUser=(id)=>{
        return this.props.data.find((el)=>{
            return el.address.zipCode === id;
        });
    }
    render() {

        return (
            <React.Fragment>
                <UserInfo currentUser = {this.displayUser(this.props.match.params.id)}/>
                <Segment inverted floated = 'left'>
                    {this.displayUser(this.props.match.params.id)?
                        <Link to={'/user/edit/'+this.props.match.params.id}>
                            <Button color="yellow">Edit user</Button>
                        </Link>
                        :
                        ''}
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

InfoPanel.defaultProps={
    data:[]
};

const mapStateToProps = state => ({
    data: state.data
});

const mapDispatchToProps = dispatch => ({
    onDeleteUser:bindActionCreators(asyncDeleteUser,dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InfoPanel);
