import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const searchInputStyles = {
    inputBox: {
        marginLeft: '20px'
    }
}

export default class SearchInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        });
    };

    submit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
    }

    render() {
        return (
            <div style={searchInputStyles.inputBox}>
                <form onSubmit={this.submit}>
                    <TextField
                        id="text-field-controlled"
                        hintText="Enter a GitHub Username"
                        floatingLabelText="GitHub Username"
                        value={this.state.value}
                        onChange={this.handleChange}
                        />
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