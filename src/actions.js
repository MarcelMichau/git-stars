export const CLEAN_STATE = 'CLEAN_STATE';
export const UPDATE_USER = 'UPDATE_USER';
export const LOAD_MORE_REPOS = 'LOAD_MORE_REPOS';
export const REQUEST_REPOS = 'REQUEST_REPOS';
export const RECEIVE_REPOS = 'RECEIVE_REPOS';
export const REQUEST_AVATAR = 'REQUEST_AVATAR';
export const RECEIVE_AVATAR = 'RECEIVE_AVATAR';

export const cleanState = value => ({
	type: CLEAN_STATE
});

export const updateUsername = value => ({
	type: UPDATE_USER,
	value
});

export const loadMoreRepos = username => ({
	type: LOAD_MORE_REPOS,
	value: username
});

export const requestRepos = username => ({
	type: REQUEST_REPOS,
	value: username
});

export const receiveRepos = (username, repos) => ({
	type: RECEIVE_REPOS,
	repos: repos
});

export const requestAvatar = username => ({
	type: REQUEST_AVATAR,
	value: username
});

export const receiveAvatar = (username, avatar) => ({
	type: RECEIVE_AVATAR,
	avatar: avatar.avatar_url
});
