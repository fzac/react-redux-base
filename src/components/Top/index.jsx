import React, { Component } from 'react';
import { css } from 'aphrodite';
import CSSModules from 'react-css-modules';
import style from './style.scss';

class Top extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
    };
    this.onClickConfirm = this.onClickConfirm.bind(this);
    this.onClickSet = this.onClickSet.bind(this);
  }

  createOnChange(type) {
    return (e) => {
      const val = e.target.value;
      this.setState({ [type]: val });
    }
  }

  onClickConfirm() {
    const text = `name: ${this.state.name}, pass: ${this.state.password}`;
    alert(text);
  }

  onClickSet() {
    const data = {
      name: this.state.name,
      password: this.state.password,
    };
    this.props.setSample(data);
  }

  render() {
    const { test } = this.props.sample;
    return (
      <div styleName="module" >
        <h1>Hello</h1>
        <p>test: {test}</p>
        <div>
          <h3>storeのデータ</h3>
          <div>
            name: {this.props.sample.name}
          </div>
          <div>
            pass: {this.props.sample.password}
          </div>
        </div>
        <br/><br/>
        <div>
          <span>name: </span>
          <input
            type="text"
            onChange={this.createOnChange('name')}
          />
        </div>
        <div>
          <span>password: </span>
          <input
            type="password"
            onChange={this.createOnChange('password')}
          />
        </div>

        <button
          onClick={this.onClickConfirm}
        >
          確認
        </button>
        <button
          onClick={this.onClickSet}
        >
          SET
        </button>
      </div>
    )
  }
}


export default CSSModules(Top, style, { allowMultiple: true });
