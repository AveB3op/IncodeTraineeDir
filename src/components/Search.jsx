import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
class Search extends Component {
    render() {
        return (<Input icon='users' iconPosition='left' placeholder='Search users...' onInput={(e) => {
            this.props.onSearch(e.target.value);
        }}/>);
    }
}

Search.propTypes={
    onSearch:PropTypes.func
};
export default Search;
