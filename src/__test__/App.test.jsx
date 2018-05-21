import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Button, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'semantic-ui-css/semantic.min.css';
import store, { history } from '../redux/store/store';
import '../index.css';
import UserInfo from '../components/UserInfo';
import EditUserForm from '../components/EditUserForm';
import AddUserForm from '../components/AddUserForm';
import App from '../containers/App';
import registerServiceWorker from '../registerServiceWorker';


describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
          <App />
        </ConnectedRouter>
      </Provider>
      , div
    );
    ReactDOM.unmountComponentAtNode(div);
    registerServiceWorker();
  });

  it('render info panel without crashing', () => {
    class InfoPanel extends Component {
          deleteUser=() => {
            this.props.onDeleteUser(this.props.match.params.id);
          }
          displayUser=id => this.props.data.find(el => el.address.zipCode === id)
          render() {
            return (
              <React.Fragment>
                <UserInfo currentUser={ this.displayUser(this.props.match.params.id) } />
                <Segment inverted floated="left">
                  {this.displayUser(this.props.match.params.id) ? (
                    <Link to={ `/user/edit/${this.props.match.params.id}` }>
                      <Button color="yellow">
Edit user
                      </Button>
                    </Link>
) :
                              ''}
                  <Link to="/">
                    <Button color="green">
Back
                    </Button>
                  </Link>
                  <Button color="red" onClick={ this.deleteUser }>
                    {' '}
Delete user
                  </Button>
                </Segment>
              </React.Fragment>
            );
          }
    }
    InfoPanel.propTypes = {
      match: PropTypes.object,
      onDeleteUser: PropTypes.func,
      data: PropTypes.array
    };
    InfoPanel.defaultProps = {
      data: []
    };
  });

  it('Add user render without crashing', () => {
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
      onAddUser: PropTypes.func
    };
  });

  it('Edit user renders without crashing', () => {
    class EditPanel extends Component {
          displayUser = id => this.props.data.find(el => el.address.zipCode === id)
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
                  default={ this.displayUser(this.props.match.params.id) }
                />
              </Segment>
            );
          }
    }
    EditPanel.propTypes = {
      match: PropTypes.object,
      onEditUser: PropTypes.func,
      data: PropTypes.array
    };
  });
});
