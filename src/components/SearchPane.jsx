import React,{ Component } from 'react';
import Search from './Search.jsx';
import User from './User.jsx';
import { Segment, Button, List  } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import _ from 'lodash';
class SearchPane extends Component {
  constructor(){
    super();
    this.state = {userList:[]};
    this.onSearch = this.onSearch.bind(this);

  }
  componentDidMount(){
    this.setState({...this.state,userList:this.props.data});
    this.onSearch= _.debounce(this.onSearch,500);
  }
  onSearch(input) {


  if (input !== '') {
    this.setState({
      ...this.state,
      userList: this.props.data.filter((el) => {
        return (el.general.firstName + el.general.lastName).toLowerCase().includes(input.toLowerCase());
      })
    });
  } else {
    this.setState({
      ...this.state,
      userList: this.props.data
    });
  }

}
  render() {
    return (
      <Segment className="search-panel" inverted floated = 'left'>
        <Search onSearch ={this.onSearch}/>
        <List bulleted>
          {this.state.userList.map((el)=>{
            return <User key ={el.address.zipCode} id ={el.address.zipCode} user={el.general} select = {this.props.select}/>
          })}
        </List>
        <Link to='/user/new'>
          <Button>
             Add new user
          </Button>
        </Link>
      </Segment>
    );
  }
}

export default SearchPane;
