import React from 'react';
import NiceDateify from './NiceDateify';
import 'font-awesome/css/font-awesome.css';

const starredItemStyles = {
    starIcon: {
        paddingTop: '2px',
        marginRight: '2px'
    }
}

export default function StarredItem({ repo }) {
    const starredDate = repo.starred_at;
    const repoContent = repo.repo;
    return (
        <div className="ui card" onClick={() => { window.open(repoContent.html_url) } }>
            <div className="image">
                <img src={repoContent.owner.avatar_url} alt="Repo Avatar"/>
            </div>
            <div className="content">
                <a className="header">{repoContent.full_name}</a>
                <div className="meta">
                    <span className="date">Starred on: <NiceDateify date={starredDate}/></span>
                </div>
                <div className="description">
                    <i style={starredItemStyles.starIcon} className="fa fa-star" aria-hidden="true"></i>
                    <span>{repoContent.stargazers_count}</span>
                </div>
            </div>
            <div className="extra content">
                <a>
                {repoContent.language && <div>{repoContent.language}</div>}
                </a>
            </div>
        </div>
    );
}