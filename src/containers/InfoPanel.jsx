import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserInfo from '../components/UserInfo';
import { asyncDeleteUser, asyncGetUser } from '../redux/action/actionCreators';

const Segment = styled.div`
  padding: 20px;
  border: 1px solid #212121;
  border-radius: 10px;
  box-shadow: 0 0 5px 1px black;
  min-width: 250px;
  margin: 15px;
  text-align:center;
  .button{
    margin-left: 50px;
    box-shadow: 0 0 8px 2px black;
    padding: 15px 30px;
  }
`;

class InfoPanel extends Component {
  componentDidMount() {
    if (!this.props.data.clients[this.props.match.params.id]) {
      this.props.getUser(this.props.match.params.id);
    }
  }

    deleteUser = () => {
      const userId = this.props.match.params.id;
      this.props.onDeleteUser(userId);
    }

    displayUser = id => this.props.data.ids.find(el => el._id === id)

    render() {
      if (this.props.isLoading) {
        return (
          <div>
          Loading...
          </div>
        );
      }
      if (!this.props.data.clients[this.props.match.params.id]) {
        return (
          <div>
          User not found.
          </div>
        );
      }
      return (
        <React.Fragment>
          <UserInfo currentUser={ this.props.data.clients[this.props.match.params.id] } />
          <Segment>
            {this.props.data.clients[this.props.match.params.id] ? (
              <Link to={ `/user/edit/${this.props.match.params.id}` }>
                <Button color="yellow">
                  Edit user
                </Button>
              </Link>
                    ) :
                        ''}
            <Link to="/">
              <Button color="green">
                Back
              </Button>
            </Link>
            <Button color="red" onClick={ this.deleteUser }>
              {' '}
              Delete user
            </Button>
          </Segment>
        </React.Fragment>
      );
    }
}
InfoPanel.propTypes = {
  match: PropTypes.object,
  onDeleteUser: PropTypes.func,
  data: PropTypes.object,
  isLoading: PropTypes.bool,
  getUser: PropTypes.func
};

InfoPanel.defaultProps = {
  data: []
};

const mapStateToProps = state => ({
  data: state.data,
  isLoading: state.data.isLoading
});

const mapDispatchToProps = dispatch => ({
  onDeleteUser: bindActionCreators(asyncDeleteUser, dispatch),
  getUser: bindActionCreators(asyncGetUser, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InfoPanel);
