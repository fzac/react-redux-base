import React, { Component } from 'react';
import { css } from 'aphrodite';
import style from './style';

export default class Top extends Component {
  constructor() {
    super();
  }

  render() {
    const { test } = this.props.sample;
    return (
      <div className={css(style.module)} >
        <h1>Hello</h1>
        <p>test: {test}</p>
      </div>
    )
  }
}
