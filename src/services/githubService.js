export default function githubService () {
    const API_BASE = 'https://api.github.com/users/';

    const headers = new Headers({
        'Accept': 'application/vnd.github.v3.star+json'
    });

    async function getUserStarredRepos(username, pageCount) {
        return await fetch(`${API_BASE}${username}/starred?page=${pageCount}`, {headers});
    }

    async function getUserAvatar(username) {
        return await fetch(`${API_BASE}${username}`);
    }

    return {
        getUserStarredRepos,
        getUserAvatar
    }
}