import React, { Component } from 'react';
import { connect } from 'react-redux';

import { closeDialog } from '../actions/dialog';
import Dialog from '../components/Dialog';

const mapStateToProps = state => ({
  isDialog: state.dialog.isDialog,
  message: state.dialog.message,
});

const mapDispatchToProps = dispatch => ({
  closeDialog: () => (
    dispatch(closeDialog())
  ),
});

class LayoutContainer extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Dialog
          isDialog={this.props.isDialog}
          message={this.props.message}
          closeDialog={this.props.closeDialog}
        />
        {this.props.children}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LayoutContainer);
