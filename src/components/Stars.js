import React from 'react';
import StarredGrid from './StarredGrid';
import InputWithAvatar from './InputWithAvatar';
import LoadingIndicator from './LoadingIndicator';
import { Button } from 'semantic-ui-react';

const starsStyles = {
    loadMoreButton: {
        margin: '15px',
        marginTop: '200px'
    },
    center: {
        display: 'flex',
        justifyContent: 'center'
    }
};

const Stars = ({username, isLoading, avatarUrl, repos, loadMoreRepos}) => {
    const loadMore = () => {
        loadMoreRepos(username);
    };
    const hasMoreThanDefaultNumberOfRepos = repos.length > 29;

    return (
        <div>
            <InputWithAvatar avatarUrl={avatarUrl} />
            <StarredGrid starredRepos={repos} />
            {isLoading && <LoadingIndicator />}
            {
                (hasMoreThanDefaultNumberOfRepos) &&
                <div style={starsStyles.center}>
                    <Button
                        onClick={loadMore}
                        style={starsStyles.loadMoreButton}>
                        Load More
                        </Button>
                </div>
            }
        </div>
    );
};

export default Stars;