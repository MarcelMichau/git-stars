import { getUserStarredRepos, getUserAvatar } from './services/githubService';

export const CLEAN_STATE = 'CLEAN_STATE';
export const UPDATE_USER = 'UPDATE_USER';
export const LOAD_MORE_REPOS = 'LOAD_MORE_REPOS';
export const REQUEST_REPOS = 'REQUEST_REPOS';
export const RECEIVE_REPOS = 'RECEIVE_REPOS';
export const REQUEST_AVATAR = 'REQUEST_AVATAR';
export const RECEIVE_AVATAR = 'RECEIVE_AVATAR';

export function cleanState(value) {
    return {
        type: CLEAN_STATE
    };
};

export function updateUsername(value) {
    return {
        type: UPDATE_USER,
        value
    };
};

export function loadMoreRepos(username) {
    return function (dispatch) {
        dispatch({
            type: LOAD_MORE_REPOS
        });

        dispatch(fetchRepos(username));
    }
};

export function requestRepos(username) {
    return {
        type: REQUEST_REPOS,
        value: username
    };
};

export function receiveRepos(username, json) {
    return {
        type: RECEIVE_REPOS,
        repos: json
    };
};

export function requestAvatar(username) {
    return {
        type: REQUEST_AVATAR,
        value: username
    };
};

export function receiveAvatar(username, json) {
    return {
        type: RECEIVE_AVATAR,
        avatar: json.avatar_url
    };
};

export function fetchRepos(username) {
    return async function (dispatch, getState) {
        dispatch(requestRepos(username));

        const response = await getUserStarredRepos(username, getState().currentPage);
        const json = await response.json();

        dispatch(receiveRepos(username, json));
    };
};

export function fetchAvatar(username) {
    return async function (dispatch) {
        dispatch(requestAvatar(username));

        const response = await getUserAvatar(username);
        const json = await response.json();

        dispatch(receiveAvatar(username, json));
    };
};