import React, { Component } from 'react';
import StarredList from './StarredList';
import SearchInput from './SearchInput';
import RaisedButton from 'material-ui/RaisedButton';
import LoadingIndicator from './LoadingIndicator';
import { getUserStarredRepos, getUserAvatar } from '../services/githubService';

const starsContainerStyles = {
    loadMoreButton: {
        margin: '15px',
        marginTop: '200px'
    },
    avatarImage: {
        borderRadius: '40px'
    },
    center: {
        display: 'flex',
        justifyContent: 'center'
    }
}

export default class StarsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasCalledApi: false,
            isLoading: false,
            pageCount: 1,
            username: '',
            repos: [],
            notFound: false,
            avatarUrl: ''
        }
    }

    doSearch = async () => {
        this.setState({
            hasCalledApi: false,
            notFound: false,
            isLoading: true
        });

        const response = await getUserStarredRepos(this.state.username, this.state.pageCount);

        if (response.status === 404) {
            this.setState({
                hasCalledApi: true,
                notFound: true,
                isLoading: false
            });
            return;
        }
        const result = await response.json();

        const avatarUrlResponse = await getUserAvatar(this.state.username);
        const avatarUrlResult = await avatarUrlResponse.json();

        this.setState({
            repos: [
                ...this.state.repos,
                ...result
            ],
            hasCalledApi: true,
            isLoading: false,
            avatarUrl: avatarUrlResult.avatar_url
        });
    }

    loadMoreRepos = () => {
        this.setState({
            pageCount: this.state.pageCount + 1
        }, this.doSearch);
    }

    updateUser = (username) => {
        this.setState({
            username,
            repos: []
        }, this.doSearch);
    }

    render() {
        let content;
        const hasMoreThanDefaultNumberOfRepos = this.state.repos.length > 29;
        const hasNoStarredRepos = this.state.repos.length === 0;

        if (this.state.notFound)
            content = <div className="custom-content">User Not Found :(</div>;
        else 
            content = <StarredList starredRepos={this.state.repos}/>;

        if (hasNoStarredRepos && this.state.hasCalledApi && !this.state.notFound)
            content = <div className="custom-content">This user does not use one of Github's best features :(</div>;

        return (
            <div>
                <SearchInput onSubmit={(username) => this.updateUser(username) }/>
                {this.state.avatarUrl && <img src={this.state.avatarUrl} alt="avatar" height="75" style={starsContainerStyles.avatarImage}/>}
                { content }
                {this.state.isLoading && <LoadingIndicator />}
                {
                    (hasMoreThanDefaultNumberOfRepos) &&
                    <div style={starsContainerStyles.center}>
                        <RaisedButton
                            label="Load More"
                            primary={true}
                            onClick={this.loadMoreRepos}
                            style={starsContainerStyles.loadMoreButton}
                            />
                    </div>
                }
            </div>
        );
    }
}