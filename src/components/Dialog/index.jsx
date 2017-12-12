import React, { Component } from 'react';

export default class Dialog extends Component {
  onClick() {
    this.props.closeDialog();
  }

  render() {
    if (!this.props.isOpen) {
      return null;
    }
    return (
      <div>
        <p>{this.props.message}</p>
        <button onClick={this.onClick}>
          閉じる
        </button>
      </div>
    );
  }
}
