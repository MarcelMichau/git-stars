import React from 'react';
import ReactDOM from 'react-dom';
//import injectTapEventPlugin from 'react-tap-event-plugin';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './semantic/dist/semantic.css';
import App from './App';
import './index.css';

//injectTapEventPlugin();

ReactDOM.render(
  //<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <App />,
  //</MuiThemeProvider>,
  document.getElementById('root')
);
