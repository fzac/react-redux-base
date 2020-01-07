import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import 'sanitize.css';
import { store } from './store';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Routes />
        </Provider>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
