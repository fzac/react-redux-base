import React, { Component } from 'react';
import { IndexRoute, Router, Route } from 'react-router';
import { history } from './store';

import NotFound from './components/NotFound';
import Layout from './containers/Layout';
import Top from './containers/Top';


class Routes extends Component {
  render() {
    return (
      <Router history={history} >
        <Route path="/" component={Layout} >
          <IndexRoute component={Top} />
          <Route path="/top" component={Top} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    );
  }
}

export default Routes;
