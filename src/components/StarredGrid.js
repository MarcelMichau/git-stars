import React from 'react';
import PropTypes from 'prop-types';
import StarredItem from './StarredItem';

const StarredGrid = ({ starredRepos }) => (
	<div className="ui centered link cards">
		{starredRepos.map(repo => (
			<StarredItem key={repo.repo.id} repo={repo} />
		))}
	</div>
);

StarredGrid.propTypes = {
	starredRepos: PropTypes.array.isRequired
};

export default StarredGrid;
