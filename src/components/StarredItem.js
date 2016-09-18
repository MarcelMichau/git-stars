import React from 'react';
import {ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import moment from 'moment';

const starredItemStyles = {
    smallerFont: {
        fontSize: '12px'
    }
}

export default function StarredItem({ repo }) {
    const starredDate = repo.starred_at;
    const repoContent = repo.repo; 
    return (
        <ListItem leftIcon={<ActionGrade />} onClick={() => { window.open(repoContent.html_url) } }>
            <div>
                {repoContent.full_name}
            </div>
            <div style={starredItemStyles.smallerFont}>
                <i>{repoContent.description}</i>
                <div style={starredItemStyles.starGazers}>{repoContent.stargazers_count} stars</div>
                {repoContent.language && <div>{repoContent.language}</div>}
                Starred on: {moment(starredDate).format('dddd, MMMM Do YYYY, H:mm')}
            </div>
        </ListItem>
    );
}