import React, { Component } from 'react';
import { BrowserRouter, Match } from 'react-router';
import AppNavBar from './components/AppNavBar';
import StarsContainer from './components/StarsContainer';
import About from './components/About';
import Paper from 'material-ui/Paper';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <AppNavBar />
            <Paper>
              <Match exactly pattern="/" component={StarsContainer} />
              <Match pattern="/about" component={About} />
            </Paper>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
