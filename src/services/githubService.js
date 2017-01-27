const API_BASE = 'https://api.github.com/';

const headers = new Headers({
    'Accept': 'application/vnd.github.v3.star+json'
});

export async function getUserStarredRepos(username, pageCount) {
    return await fetch(`${API_BASE}users/${username}/starred?page=${pageCount}`, { headers });
}

export async function getUserAvatar(username) {
    return await fetch(`${API_BASE}users/${username}`);
}

export async function getRepoReadme(username, repoName) {
    return await fetch(`${API_BASE}repos/${username}/${repoName}/readme`);
}