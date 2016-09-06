import React from 'react';
import {List} from 'material-ui/List';
import StarredItem from './StarredItem';

function StarredList({starredRepos}) {
    return (
        <div className="starred-list">
            <List>
                {
                    starredRepos.map(repo => <StarredItem key={repo.id} repo={repo} />)
                }
            </List>
        </div>
    );
}

export default StarredList;