import React,{ Component } from 'react';
import { Input } from 'semantic-ui-react';

class Search extends Component {

  render() {
    return (
      <Input icon='users' iconPosition='left' placeholder='Search users...' onInput={(e)=>{this.props.onSearch(e.target.value)}}/>
    );
  }
}

export default Search;
