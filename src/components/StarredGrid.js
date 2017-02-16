import React, { PropTypes } from 'react';
import StarredItem from './StarredItem';

export default function StarredGrid({starredRepos}) {
    return (
        <div className="ui centered link cards">
            {
                starredRepos.map(repo => <StarredItem key={repo.repo.id} repo={repo} />)
            }
        </div>
    );
};

StarredGrid.propTypes = {
    starredRepos: PropTypes.array.isRequired
};