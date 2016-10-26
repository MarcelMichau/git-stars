import React from 'react';
import StarredItem from './StarredItem';

export default function StarredList({starredRepos}) {
    return (
        <div className="ui centered link cards">
            {
                starredRepos.map(repo => <StarredItem key={repo.repo.id} repo={repo} />)
            }
        </div>
    );
}