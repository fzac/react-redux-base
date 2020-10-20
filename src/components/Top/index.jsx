import React, { Component } from 'react';
import { css } from 'aphrodite';
import CSSModules from 'react-css-modules';
import style from './style.scss';

class Top extends Component {
  constructor() {
    super();
  }

  render() {
    const { test } = this.props.sample;
    return (
      <div styleName="module" >
        <h1>Hello</h1>
        <p>test: {test}</p>
      </div>
    )
  }
}


export default CSSModules(Top, style, { allowMultiple: true });
