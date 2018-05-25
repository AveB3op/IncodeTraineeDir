import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Button, List } from 'semantic-ui-react';
import styled from 'styled-components';
import Search from '../components/Search';
import Client from '../components/Client';
import { addSearchFilter, asyncGetData, setSearchFilter } from '../redux/action/actionCreators';

const Segment = styled.div`
  padding: 10px 20px;
  border: 1px solid #212121;
  border-radius: 10px;
  box-shadow: 0 0 5px 1px black;
  min-width: 250px;
  width: 100%;
  margin: 5px;
  max-height: 95%;
  .list{
    overflow-y: auto;
    max-height: 600px;
    box-shadow: inset  0 0 5px 2px black;
    padding: 10px;
    background-color: #1b1c21;
  }
  .button{
    margin-left: 50px;
    box-shadow: 0 0 5px 2px black;
  }
`;
class SearchPanel extends Component {
  componentDidMount() {
    if (!this.props.data.allDataLoaded) this.props.onLoading();
    if (this.props.data.filter !== '') {
      this.props.setFilter('');
      this.props.onLoading();
    }
  }

  render() {
    return (
      <Segment>
        <Search onSearch={ this.props.onSearch } onLoading={ this.props.onLoading } />
        <List>
          {this.props.data.ids.map(el => (
            <Client
              key={ el }
              id={ el }
              client={ this.props.data.clients[el].general }
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
  data: PropTypes.object,
  select: PropTypes.func,
  onSearch: PropTypes.func,
  onLoading: PropTypes.func,
  setFilter: PropTypes.func
};

const mapStateToProps = state => ({
  data: state.data
});

const mapDispatchToProps = dispatch => ({
  onSearch: bindActionCreators(addSearchFilter, dispatch),
  onLoading: bindActionCreators(asyncGetData, dispatch),
  setFilter: bindActionCreators(setSearchFilter, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPanel);
