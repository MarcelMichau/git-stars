import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

jest.mock('material-ui/AppBar');
jest.mock('material-ui/Paper');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});