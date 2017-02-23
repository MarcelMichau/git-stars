import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import AppNavBar from './components/AppNavBar';
import StarsContainer from './components/StarsContainer';
import About from './components/About';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppNavBar />
          <Route exact path="/" component={StarsContainer}></Route>
          <Route exact path="/about" component={About}></Route>
        </div>
      </Router>
    );
  }
};
