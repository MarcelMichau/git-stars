import React from 'react';
import NiceDateify from './NiceDateify';
import { Card, Icon, Image } from 'semantic-ui-react';

const StarredItem = ({repo, openModal}) => {
    const starredDate = repo.starred_at;
    const repoContent = repo.repo;

    return (
        <Card onClick={() => { openModal(repo) } }>
            <Card.Content>
                <Card.Header>
                    {repoContent.full_name}
                </Card.Header>
            </Card.Content>
            <Image src={repoContent.owner.avatar_url} />
            <Card.Content>
                <span className="right floated">
                    <i className="star icon" aria-hidden="true"></i>
                    <span>{repoContent.stargazers_count}</span>
                </span>
                <Card.Meta>
                    <span className="date">
                        Starred on: <NiceDateify date={starredDate} />
                    </span>
                </Card.Meta>
                <Card.Description>
                    {repoContent.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <span>
                    <Icon name="file code outline" />
                    {repoContent.language ? <span>{repoContent.language}</span> : <span>Unknown</span>}
                </span>
            </Card.Content>
        </Card>
    );
};

export default StarredItem;