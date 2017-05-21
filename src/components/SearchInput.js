import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';

const SearchInput = ({
	resetSearch,
	username,
	updateUser,
	onSearch,
	updateAvatar
}) => {
	const handleChange = event => {
		updateUser(event.target.value);
	};

	const submitForm = event => {
		event.preventDefault();
		resetSearch();
		onSearch(username);
		updateAvatar(username);
	};

	return (
		<Form onSubmit={submitForm}>
			<Form.Field>
				<label>Github Username</label>
				<input
					type="text"
					name="github-username"
					placeholder="Enter your Github Username"
					value={username}
					onChange={handleChange}
				/>
			</Form.Field>
			<Button
				primary
				type="submit"
				content="Search GitHub"
				icon="search"
				labelPosition="right"
			/>
		</Form>
	);
};

SearchInput.propTypes = {
	resetSearch: PropTypes.func.isRequired,
	username: PropTypes.string.isRequired,
	updateUser: PropTypes.func.isRequired,
	onSearch: PropTypes.func.isRequired,
	updateAvatar: PropTypes.func.isRequired
};

export default SearchInput;
