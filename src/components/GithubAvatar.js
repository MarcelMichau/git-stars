import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';

const GithubAvatar = ({ avatarUrl }) =>
	<span>
		{avatarUrl && <Image src={avatarUrl} size="tiny" circular />}
	</span>;

GithubAvatar.propTypes = {
	avatarUrl: PropTypes.string.isRequired
};

export default GithubAvatar;
