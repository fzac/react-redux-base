import React, { Component } from 'react';

const styles = {
  height: 500,
  width: 500,
  textAlign: 'center',
  fontSize: '20px',
};

export default class NotFound extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={styles}>
        <p>お探しのページは見つかりません</p>
      </div>
    );
  }
}
