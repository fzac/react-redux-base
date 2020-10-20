import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import { connect } from 'react-redux';
import { fetchSample, setSample } from '../actions/sample';
import Top from '../components/Top';

const mapStateToProps = state => ({
  sample: state.sample,
});

const mapDispatchToProps = dispatch => ({
  fetchSample: () => (
    dispatch(fetchSample())
  ),
  setSample: (data) => (
    dispatch(setSample(data))
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
      <Top
        sample={this.props.sample}
        setSample={this.props.setSample}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopContainer);
