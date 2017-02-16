import React, { PropTypes } from 'react';
import NiceDateify from './NiceDateify';
import { Card, Icon, Image } from 'semantic-ui-react';

const StarredItem = ({repo}) => {
    const starredDate = repo.starred_at;
    const repoContent = repo.repo;

    return (
        <Card>
            <Card.Content>
                <Card.Header>
                    <a href={repoContent.html_url} target="_blank">{repoContent.full_name}</a>
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
                    <Icon name="code" />
                    {repoContent.language ? <span>{repoContent.language}</span> : <span>Unknown</span>}
                </span>
            </Card.Content>
        </Card>
    );
};

StarredItem.propTypes = {
    repo: PropTypes.shape({
        starred_at: PropTypes.string.isRequired,
        repo: PropTypes.shape({
            html_url: PropTypes.string.isRequired,
            full_name: PropTypes.string.isRequired,
            stargazers_count: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            language: PropTypes.string,
            owner: PropTypes.shape({
                avatar_url: PropTypes.string.isRequired
            }).isRequired
        }).isRequired
    }).isRequired
};

export default StarredItem;
