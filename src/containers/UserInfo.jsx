import React,{ Component } from 'react';
import { Button,Segment } from 'semantic-ui-react';
import InfoPanel from '../components/InfoPanel';
import {Link} from 'react-router-dom';
class UserInfo extends Component {

  constructor(props){
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
  }
  deleteUser(){
    this.props.deleteUser(this.props.match.params.id);
    this.props.history.push('/');
  }
  render() {

    return (
      <React.Fragment>
      <InfoPanel currentUser = {this.props.displayUser(this.props.match.params.id)}/>

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

export default UserInfo;
