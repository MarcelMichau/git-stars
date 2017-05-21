import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppNavBar from './components/AppNavBar';
import StarsContainer from './components/StarsContainer';
import LazyComponent from './components/LazyComponent';

const About = LazyComponent({
	loader: () => import('./components/About')
});

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<AppNavBar />
					<Route exact path="/" component={StarsContainer} />
					<Route exact path="/about" component={About} />
				</div>
			</Router>
		);
	}
}

export default App;
