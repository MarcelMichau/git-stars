import React from 'react';
import StarredItem from './StarredItem';

export default function StarredGrid({openModal, starredRepos}) {
    return (
        <div className="ui centered link cards">
            {
                starredRepos.map(repo => <StarredItem key={repo.repo.id} openModal={openModal} repo={repo} />)
            }
        </div>
    );
}