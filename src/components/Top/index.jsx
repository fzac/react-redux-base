import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import style from './style.scss';
import _ from 'lodash';


class Top extends Component {
  constructor() {
    super();
    this.state = {
      text: '表示',
      password: '',
      time: 0,
      startTime: null,
      isModalOpen: false,
    };
    this.onClickConFirm = this.onClickConFirm.bind(this);
    this.onClickSet = this.onClickSet.bind(this);
    this.onClickGet = this.onClickGet.bind(this);
    this.onClickAdd = this.onClickAdd.bind(this);
    this.onClickReset = this.onClickReset.bind(this);
    this.textChange = this.textChange.bind(this);
    this.handleClickClose = this.handleClickClose.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
  }

  createOnChange(type) {
    return (e) => {
      const val = e.target.value;
      this.setState({ [type]: val });
    }
  }

  onClickConFirm() {
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

  onClickGet() {
    const time = _.clone(this.state.time);
    time.push(new Date());
    this.setState({time: time});
  }

  onClickAdd() {
    if (this.state.startTime) {
      const time = (Date.now() - this.state.startTime) / 1000;
      this.setState({time: time + this.state.time, startTime: null})
    } else {
      this.setState({startTime: Date.now()});
    }
  }

  onClickReset() {
    this.setState({time: 0});
  }

  textChange() {
    if (this.state.text === '表示') {
      this.setState({ text: '非表示' });
    } else if (this.state.text === '非表示') {
      this.setState({ text: '表示' });
    }
  }

  handleClickOpen() {
    this.setState({ isModalOpen: true });
  }

  handleClickClose() {
    this.setState({ isModalOpen: false });
  }


  render() {
    return (
      <h1>hello world</h1>
    );
  }
}


export default CSSModules(Top, style, { allowMultiple: true });
