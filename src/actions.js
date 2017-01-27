export function updateUsername(value) {
    return {
        type: 'UPDATE_USER',
        value
    };
}

export function fetchRepos(username) {
    return {
        type: 'REQUEST_REPOS',
        value: username
    };
}

export function receiveRepos(username, json) {
    return {
        type: 'RECEIVE_REPOS',
        repos: json
    };
}

export function updateAvatarURL(url) {
    return {
        type: 'UPDATE_AVATAR',
        value: url
    };
}