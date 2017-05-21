import axios from 'axios';

const githubApi = axios.create({
	baseURL: 'https://api.github.com/',
	headers: { Accept: 'application/vnd.github.v3.star+json' }
});

export const getUserStarredRepos = async (username, pageCount) =>
	await githubApi.get(`users/${username}/starred?page=${pageCount}`);

export const getUserAvatar = async username =>
	await githubApi.get(`users/${username}`);
