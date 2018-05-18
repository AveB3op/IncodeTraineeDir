import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const debounceDelay = 500;

class Search extends Component {
    componentDidMount(){
        this.onSearch= _.debounce(this.props.onSearch,debounceDelay);
        this.props.onSearch('');
    }

  Search = (e)=>{
      this.onSearch(e.target.value);
  }
  
  render() {
      return (<Input icon='users' iconPosition='left' placeholder='Search users...' onChange={this.Search}/>);
  }
}

Search.propTypes={
    onSearch:PropTypes.func
};
export default Search;
