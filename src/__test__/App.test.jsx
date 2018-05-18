import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Button,Segment } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import store,{ history } from '../redux/store/store';
import 'semantic-ui-css/semantic.min.css';
import '../index.css';
import UserInfo from '../components/UserInfo';
import EditUserForm from '../components/EditUserForm.jsx';
import AddUserForm from '../components/AddUserForm.jsx';
import App from '../containers/App';
import registerServiceWorker from '../registerServiceWorker';



describe('App',()=>{

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Provider store = {store}>
                <ConnectedRouter history = {history}>
                    <App />
                </ConnectedRouter>
            </Provider>
            , div);
        ReactDOM.unmountComponentAtNode(div);
        registerServiceWorker();

    });

    it('render info panel without crashing',()=>{
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
    });

    it('Add user render without crashing',()=>{

        class AddUserPanel extends Component {
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

        AddUserPanel.propTypes={
            onAddUser:PropTypes.func,
            history: PropTypes.object,

        };
    });

    it('Edit user renders without crashing',()=>{

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

    });


});
