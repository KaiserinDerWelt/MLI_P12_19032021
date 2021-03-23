import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import Dashboard from './components/Dashboard';

ReactDOM.render(
  <Router>
  <div>
    <Switch>
        {/* Pages*/}
        <Route exact path="/" component={Dashboard} />
      </Switch>
  </div>
</Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//<Route exact path='/' component={Home} />
    //<Route path='/login' component={Signin} />