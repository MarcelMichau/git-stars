import React from 'react';
import StarredList from './StarredList';
import SearchInput from './SearchInput';
import RaisedButton from 'material-ui/RaisedButton';
import LoadingIndicator from './LoadingIndicator';

const starsContainerStyles = {
    loadMoreButton: {
        margin: '15px'
    },
    avatarImage: {
        borderRadius: '40px'
    }
}

class StarsContainer extends React.Component {
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

        this.doSearch = this.doSearch.bind(this);
        this.loadMoreRepos = this.loadMoreRepos.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    async doSearch() {
        this.setState({
            hasCalledApi: false,
            notFound: false,
            isLoading: true
        });

        const headers = new Headers({
            'Accept': 'application/vnd.github.v3.star+json'
        });

        const response = await fetch(`https://api.github.com/users/${this.state.username}/starred?page=${this.state.pageCount}`, {headers});

        if (response.status === 404) {
            this.setState({
                hasCalledApi: true,
                notFound: true,
                isLoading: false
            });
            return;
        }
        const result = await response.json();

        const avatarUrlResponse = await fetch(`https://api.github.com/users/${this.state.username}`);
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

    loadMoreRepos() {
        this.setState({
            pageCount: this.state.pageCount + 1
        }, () => {
            this.doSearch();
        });
    }

    updateUser(username) {
        this.setState({
            username,
            repos: []
        }, () => {
            this.doSearch();
        })
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
                    <RaisedButton
                        label="Load More"
                        primary={true}
                        onClick={this.loadMoreRepos}
                        style={starsContainerStyles.loadMoreButton}
                        />
                }
            </div>
        );
    }
}

export default StarsContainer;