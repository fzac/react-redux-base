import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import axios from 'axios';
import 'sanitize.css';
import { store } from './store';
import Routes from './routes';

injectTapEventPlugin();

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
