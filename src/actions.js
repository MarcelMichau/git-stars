import * as actionTypes from './constants/actionTypes';

export const cleanState = value => ({
	type: actionTypes.CLEAN_STATE
});

export const updateUsername = value => ({
	type: actionTypes.UPDATE_USER,
	value
});

export const loadMoreRepos = username => ({
	type: actionTypes.LOAD_MORE_REPOS,
	value: username
});

export const requestRepos = username => ({
	type: actionTypes.REQUEST_REPOS,
	value: username
});

export const receiveRepos = (username, repos) => ({
	type: actionTypes.RECEIVE_REPOS,
	repos: repos
});

export const requestAvatar = username => ({
	type: actionTypes.REQUEST_AVATAR,
	value: username
});

export const receiveAvatar = (username, avatar) => ({
	type: actionTypes.RECEIVE_AVATAR,
	avatar: avatar.avatar_url
});
