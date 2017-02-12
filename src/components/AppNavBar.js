import React from 'react';
import { Menu } from 'semantic-ui-react';

export default function AppNavBar() {
    return (
        <Menu>
            <Menu.Item header>Git Stars</Menu.Item>
            <Menu.Item name="home" onClick={(e) => console.log('Clicked on menu tab')} />
        </Menu>
    );
};

