import React from 'react';
import {List} from 'material-ui/List';
import StarredItem from './StarredItem';

function StarredList({starredRepos}) {
    return (
        <List>
            {
                starredRepos.map(repo => <StarredItem key={repo.repo.id} repo={repo} />)
            }
        </List>
    );
}

export default StarredList;