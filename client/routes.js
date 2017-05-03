import React from 'react'
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import { App } from '/imports/ui/app';
import Items from '/imports/ui/items/index'


export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Items}/>
      <Route path='one' component={() => <p>One</p>}/>
      <Route path='two' component={() => <p>Two</p>}/>
      <Route path='three' component={() => <p>Three</p>}/>
      <Route path="*" component={() => <p>Not Found</p>}/>
    </Route>
  </Router>
)
