import React from 'react';
import PropTypes from 'prop-types';
//import StarredGrid from './StarredGrid';
import InputWithAvatar from './InputWithAvatar';
import LoadingIndicator from './LoadingIndicator';
import LazyComponent from './LazyComponent';
import { Button } from 'semantic-ui-react';

const StarredGrid = LazyComponent({
	loader: () => import('./StarredGrid')
});

const starsStyles = {
	loadMoreButton: {
		margin: '15px',
		marginTop: '200px'
	},
	center: {
		display: 'flex',
		justifyContent: 'center'
	}
};

const Stars = ({ username, isLoading, avatarUrl, repos, loadMoreRepos }) => {
	const loadMore = () => {
		loadMoreRepos(username);
	};
	const hasMoreThanDefaultNumberOfRepos = repos.length >= 30;

	return (
		<div>
			<InputWithAvatar avatarUrl={avatarUrl} />
			{repos.length > 0 && <StarredGrid starredRepos={repos} />}
			{isLoading && <LoadingIndicator />}
			{hasMoreThanDefaultNumberOfRepos &&
				<div style={starsStyles.center}>
					<Button onClick={loadMore} style={starsStyles.loadMoreButton}>
						Load More
					</Button>
				</div>}
		</div>
	);
};

Stars.propTypes = {
	username: PropTypes.string.isRequired,
	isLoading: PropTypes.bool.isRequired,
	avatarUrl: PropTypes.string.isRequired,
	repos: PropTypes.array.isRequired,
	loadMoreRepos: PropTypes.func.isRequired
};

export default Stars;
