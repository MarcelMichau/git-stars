import React, { Component } from 'react';
import { BrowserRouter, Match } from 'react-router';
import AppNavBar from './components/AppNavBar';
import StarsContainer from './components/StarsContainer';
import About from './components/About';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <AppNavBar />
            <div className="pusher">
              <Match exactly pattern="/" component={StarsContainer} />
              <Match pattern="/about" component={About} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
