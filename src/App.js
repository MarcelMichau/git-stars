import React, { Component } from 'react';
import AppNavBar from './components/AppNavBar';
import StarsContainer from './components/StarsContainer';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
          <div>
            <AppNavBar />
            <StarsContainer />
          </div>
      </div>
    );
  }
}
