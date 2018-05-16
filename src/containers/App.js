import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import './App.css';
import SearchPane from '../components/SearchPane';
import UserInfo from './UserInfo';
import AddUser from './AddUser';
import EditPanel from './EditPanel';
import withSubscription from '../hoc/WithSubscription';

class App extends Component {

    render() {
        return (<Container text className="App">

            <Switch>
                <Route exact path='/' component={withSubscription(SearchPane)}/>
                <Route exact path='/user/profile/:id' component={withSubscription(UserInfo)}/>
                <Route exact path='/user/new' component={withSubscription(AddUser)}/>
                <Route exact path='/user/edit/:id' component={withSubscription(EditPanel)}/>
            </Switch>

        </Container>);
    }
}

export default App;
