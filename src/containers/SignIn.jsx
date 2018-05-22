import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { addSearchFilter, asyncGetData } from '../redux/action/actionCreators';

// // TODO:

class signIn extends Component {
  componentDidMount() {
    if (!this.props.data.allDataLoaded) this.props.onLoading();
  }

  render() {
    return (
      <div />
    );
  }
}
signIn.propTypes = {
  data: PropTypes.object,
  onLoading: PropTypes.func
};

const mapStateToProps = state => ({
  data: state.data
});

const mapDispatchToProps = dispatch => ({
  onSearch: bindActionCreators(addSearchFilter, dispatch),
  onLoading: bindActionCreators(asyncGetData, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(signIn);
