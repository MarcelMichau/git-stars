import React from 'react';
import {ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';

const starredItemStyles = {
    description: {
        fontSize: '12px'
    },
    starGazers: {
        fontSize: '12px'
    },
    language: {
        fontSize: '12px'
    }
}

function StarredItem({ repo }) {
    return (
        <ListItem leftIcon={<ActionGrade />} onClick={() => { window.open(repo.html_url) } }>
            <div>
                {repo.full_name}
            </div>
            <div style={starredItemStyles.description}>
                <i>{repo.description}</i>
            </div>
            <small style={starredItemStyles.starGazers}>{repo.stargazers_count} stars</small>
            <div style={starredItemStyles.language}>
                {repo.language && <small>{repo.language}</small>}
            </div>
        </ListItem>
    );
}

export default StarredItem;