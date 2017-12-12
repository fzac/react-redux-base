import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import { connect } from 'react-redux';
import { fetchSample } from '../actions/sample';
import Top from '../components/Top';

const mapStateToProps = state => ({
  sample: state.sample,
});

const mapDispatchToProps = dispatch => ({
  fetchSample: () => (
    dispatch(fetchSample())
  ),
});

class TopContainer extends Component {
  componentDidMount() {
    this.props.fetchSample();
  }

  componentWillReceiveProps(nextProps) {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <Top sample={this.props.sample} />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopContainer);
