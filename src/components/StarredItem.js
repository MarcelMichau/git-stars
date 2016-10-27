import React from 'react';
import NiceDateify from './NiceDateify';

const StarredItem = ({repo, openModal}) => {
    const starredDate = repo.starred_at;
    const repoContent = repo.repo;

    return (
        <div className="ui card" onClick={() => { openModal(repo) } }>
            <div className="content">
                <a className="header">{repoContent.full_name}</a>
            </div>
            <div className="image">
                <img src={repoContent.owner.avatar_url} alt="Repo Avatar" />
            </div>
            <div className="content">
                <span className="right floated">
                    <i className="star icon" aria-hidden="true"></i>
                    <span>{repoContent.stargazers_count}</span>
                </span>
                <div className="meta">
                    <span className="date">Starred on: <NiceDateify date={starredDate} /></span>
                </div>
                <div className="description">
                    {repoContent.description}
                </div>
            </div>
            <div className="extra content">
                <a>
                    <i className="file code outline icon"></i>
                    {repoContent.language ? <span>{repoContent.language}</span> : <span>Unknown</span>}
                </a>
            </div>
        </div>
    );
};

export default StarredItem;