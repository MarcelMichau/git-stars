import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const searchInputStyles = {
    inputBox: {
        marginLeft: '20px',
        marginRight: '20px',
        display: 'inline-block'
    }
}

export default class SearchInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        });
    };

    submit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.value);
    }

    render() {
        return (
            <div style={searchInputStyles.inputBox}>
                <form onSubmit={this.submit}>
                    <div>
                        <TextField
                            id="text-field-controlled"
                            hintText="Enter a GitHub Username"
                            floatingLabelText="GitHub Username"
                            value={this.state.value}
                            onChange={this.handleChange}
                            />
                    </div>

                    <RaisedButton
                        label="Search GitHub"
                        primary={true}
                        type="submit"
                        />
                </form>
            </div>
        );
    }
}