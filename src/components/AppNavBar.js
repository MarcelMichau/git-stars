import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AppNavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isDrawerOpen: false
        }
    }

    dockDrawer = () => {
        this.setState({ isDrawerOpen: !this.state.isDrawerOpen });
    }

    render() {
        return (
            <div className="ui top fixed menu">
                <div className="item">
                    Git Stars
                </div>
                <Link to="/">
                    <span className="item">Home</span>
                </Link>
                <Link to="/about">
                    <span className="item">About</span>
                </Link>
            </div>
        );
    }
}

