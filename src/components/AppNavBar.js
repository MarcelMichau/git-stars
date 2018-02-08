import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const NavbarMenuItem = ({ label, to, activeOnlyWhenExact }) => (
	<Route
		path={to}
		exact={activeOnlyWhenExact}
		children={({ match }) => (
			<Menu.Item as={Link} to={to} active={match ? true : false} name={label}>
				{label}
			</Menu.Item>
		)}
	/>
);

const AppNavBar = () => (
	<Menu>
		<Menu.Item header>Git Stars</Menu.Item>
		<NavbarMenuItem activeOnlyWhenExact={true} to="/" label="Home" />
		<NavbarMenuItem to="/about" label="About" />
	</Menu>
);

export default AppNavBar;
