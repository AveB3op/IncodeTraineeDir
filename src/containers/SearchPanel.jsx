import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Segment, Button, List } from 'semantic-ui-react';
import Search from '../components/Search';
import User from '../components/User';
import { addSearchFilter, asyncGetData } from '../redux/action/actionCreators';
import getFilteredUserList from '../selectors';


class SearchPanel extends Component {
  componentDidMount() {
    this.props.onLoading();
  }

  render() {
    return (
      <Segment className="search-panel" inverted floated="left">
        <Search onSearch={ this.props.onSearch } />
        <List bulleted>
          {this.props.data.map(el => (
            <User
              key={ el._id }
              id={ el._id }
              user={ el.general }
              select={ this.props.select }
            />
          ))}
        </List>
        <Link to="/user/new">
          <Button>
                    Add new user
          </Button>
        </Link>
      </Segment>
    );
  }
}
SearchPanel.propTypes = {
  data: PropTypes.array,
  select: PropTypes.func,
  onSearch: PropTypes.func,
  onLoading: PropTypes.func
};

const mapStateToProps = state => ({
  data: getFilteredUserList(state)
});

const mapDispatchToProps = dispatch => ({
  onSearch: bindActionCreators(addSearchFilter, dispatch),
  onLoading: bindActionCreators(asyncGetData, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPanel);
