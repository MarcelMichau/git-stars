import React from 'react';
import StarredList from './StarredList';
import SearchInput from './SearchInput';
import RaisedButton from 'material-ui/RaisedButton';

const starsContainerStyles = {
    loadMoreButton: {
        padding: '15px'
    }
}

class StarsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            pageCount: 1,
            username: '',
            repos: []
        }

        this.doSearch = this.doSearch.bind(this);
        this.loadMoreRepos = this.loadMoreRepos.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount() {
        this.doSearch();
    }

    async doSearch() {
        this.setState({
            isLoading: true
        });

        const response = await fetch(`https://api.github.com/users/${this.state.username}/starred?page=${this.state.pageCount}`);
        const result = await response.json();


        this.setState({
            repos: [
                ...this.state.repos,
                ...result
            ],
            isLoading: false
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
        return (
            <div>
                <SearchInput onSubmit={(username) => this.updateUser(username) }/>
                { this.state.isLoading ? <p>Loading...</p> : <StarredList starredRepos={this.state.repos}/> }
                {  
                    (this.state.repos.length > 29) &&
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