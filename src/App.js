import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import StarsContainer from './components/StarsContainer';
import Paper from 'material-ui/Paper';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar
          title="Git Stars"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        <Paper>
          <StarsContainer />
        </Paper>
      </div>
    );
  }
}

export default App;
