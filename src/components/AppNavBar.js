import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

export default class AppNavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isDrawerOpen: false
        }
    }

    dockDrawer = () => {
        this.setState({isDrawerOpen: !this.state.isDrawerOpen});
    }

    render() {
        return (
            <div>
                <AppBar
                    title="Git Stars"
                    onLeftIconButtonTouchTap={this.dockDrawer}
                    />
                <Drawer open={this.state.isDrawerOpen} docked={false} onRequestChange={(open) => this.setState({isDrawerOpen : open})}>
                    <Link to="/">
                        <MenuItem primaryText="Home" onTouchTap={this.dockDrawer} />
                    </Link>
                    <Link to="/about">
                        <MenuItem primaryText="About" onTouchTap={this.dockDrawer} />
                    </Link>
                </Drawer>
            </div>
        );
    }
}
