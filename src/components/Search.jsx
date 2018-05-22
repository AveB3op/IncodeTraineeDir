import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const debounceDelay = 500;

class Search extends Component {
  componentDidMount() {
    this.search = _.debounce(this.search, debounceDelay);
  }

  onSearch = (e) => {
    this.searchInput = e.target.value;
    this.search();
  };

  search = () => {
    if (this.searchInput === '') {
      this.props.onLoading();
    } else {
      this.props.onSearch(this.searchInput);
    }
  }

  render() {
    return (<Input icon="users" iconPosition="left" placeholder="Search users..." onInput={ this.onSearch } />);
  }
}

Search.propTypes = {
  onSearch: PropTypes.func,
  onLoading: PropTypes.func
};
export default Search;
