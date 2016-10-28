import React, { Component } from 'react';

export default class SearchInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    };

    submit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.value);
    }

    render() {
        return (
            <div className="ui container">
                <form className="ui form" onSubmit={this.submit}>
                    <div className="field">
                        <label>Github Username</label>
                        <input
                            type="text"
                            name="first-name"
                            placeholder="Enter your Github Username"
                            value={this.state.value}
                            onChange={this.handleChange}
                            />
                    </div>
                    <button className="ui right labeled icon primary button" type="submit">
                        <i className="search icon"></i>
                        Search Github
                    </button>
                </form>
            </div>
        );
    }
}