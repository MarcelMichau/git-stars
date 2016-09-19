import React from 'react';
import { ListItem } from 'material-ui/List';
import NiceDateify from './NiceDateify';
import 'font-awesome/css/font-awesome.css';

const starredItemStyles = {
    smallerFont: {
        fontSize: '12px'
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '5px',
        marginBottom: '5px'
    },
    centerAndJustified: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '5px',
        marginBottom: '5px',
        textAlign: 'justify',
        textAlignLast: 'center'
    },
    avatarImage: {
        borderRadius: '40px'
    },
    starIcon: {
        paddingTop: '2px',
        marginRight: '2px'
    }
}

export default function StarredItem({ repo }) {
    const starredDate = repo.starred_at;
    const repoContent = repo.repo;
    return (
        <ListItem onClick={() => { window.open(repoContent.html_url) } }>
            <div style={starredItemStyles.center}>
                <img src={repoContent.owner.avatar_url} alt="Repo Avatar" height="75" style={starredItemStyles.avatarImage}/>
            </div>
            <div style={starredItemStyles.center}>
                {repoContent.full_name}
            </div>

            <div style={starredItemStyles.centerAndJustified}>
                <i style={starredItemStyles.smallerFont}>{repoContent.description}</i>
            </div>
            
            <div style={starredItemStyles.smallerFont}>
                <div style={starredItemStyles.center}>
                    <i style={starredItemStyles.starIcon} className="fa fa-star" aria-hidden="true"></i>
                    <span>{repoContent.stargazers_count}</span>
                </div>
                <div style={starredItemStyles.center}>
                    <div>Starred on: <NiceDateify date={starredDate}/></div>
                </div>
                <div style={starredItemStyles.center}>
                    {repoContent.language && <div>{repoContent.language}</div>}
                </div>
            </div>
        </ListItem>
    );
}