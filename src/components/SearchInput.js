import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';

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
            <Form onSubmit={this.submit}>
                <Form.Field>
                    <label>Github Username</label>
                    <input type="text" name="github-username" placeholder="Enter your Github Username" value={this.state.value} onChange={this.handleChange}/>
                </Form.Field>
                <Button primary type="submit" content="Search Github" icon="search" labelPosition="right" />
            </Form>
        );
    }
}