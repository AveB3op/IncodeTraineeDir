import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import './App.css';
import SearchPane from '../components/SearchPane';
import UserInfo from './UserInfo';
import AddUser from './AddUser';
import EditPanel from './EditPanel';

class App extends Component {

    render() {
        return (
            <Container text className="App">

                <Switch>
                    <Route exact path='/' component={SearchPane}/>
                    <Route exact path='/user/profile/:id' component={UserInfo}/>
                    <Route exact path='/user/new' component={AddUser}/>
                    <Route exact path='/user/edit/:id' component={EditPanel}/>
                </Switch>

            </Container>);
    }
}

export default App;
