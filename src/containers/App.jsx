import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SearchPanel from './SearchPanel';
import InfoPanel from './InfoPanel';
import AddUserPanel from './AddUserPanel';
import EditPanel from './EditPanel';
import LoginPanel from './LoginPanel';
import SignUp from './SignUp';
import SignIn from './SignIn';
import UserListPanel from './UserListPanel';
import { Container, Main, Header } from '../components/AppStyledComponents';

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <LoginPanel />
        </Header>
        <Main>

          <Switch>
            <Route exact path="/" component={ SearchPanel } />
            <Route exact path="/user/profile/:id" component={ InfoPanel } />
            <Route exact path="/user/new" component={ AddUserPanel } />
            <Route exact path="/user/edit/:id" component={ EditPanel } />
            <Route exact path="/signup" component={ SignUp } />
            <Route exact path="/login" component={ SignIn } />
          </Switch>
        </Main>

        <UserListPanel />
      </Container>);
  }
}

export default App;
