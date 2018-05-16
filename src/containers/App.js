import React, {Component} from 'react';
import './App.css';
import SearchPane from '../components/SearchPane.jsx';
import UserInfo from './UserInfo.jsx';
import AddUser from './AddUser.jsx';
import EditPanel from './EditPanel.jsx';
import {Container} from 'semantic-ui-react';
import {Route, Switch} from 'react-router-dom';
import withSubscription from '../hoc/WithSubscription.jsx';
class App extends Component {

  render() {
    return (<Container text="text" className="App">

      <Switch>
        <Route exact="exact" path='/' component={withSubscription(SearchPane)}/>
        <Route exact="exact" path='/user/profile/:id' component={withSubscription(UserInfo)}/>
        <Route exact="exact" path='/user/new' component={withSubscription(AddUser)}/>
        <Route exact="exact" path='/user/edit/:id' component={withSubscription(EditPanel)}/>
      </Switch>

    </Container>);
  }
}

export default App;
