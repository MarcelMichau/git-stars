import { CLEAN_STATE, UPDATE_USER, LOAD_MORE_REPOS, REQUEST_REPOS, RECEIVE_REPOS, REQUEST_AVATAR, RECEIVE_AVATAR } from './actions';

const initialState = {
    username: '',
    avatarUrl: '',
    isLoading: false,
    currentPage: 1,
    repos: []
};

export default function gitStarsApp(state = initialState, action) {
    switch (action.type) {
        case CLEAN_STATE:
            return {
                ...state,
                repos: [],
                currentPage: 1,
                isLoading: false
            };
        case UPDATE_USER:
            return {
                ...state,
                username: action.value
            };
        case LOAD_MORE_REPOS:
            return {
                ...state,
                currentPage: state.currentPage + 1
            };
        case REQUEST_REPOS:
            return {
                ...state,
                isLoading: true
            };
        case RECEIVE_REPOS:
            return {
                ...state,
                isLoading: false,
                repos: [...state.repos, ...action.repos]
            };
        case REQUEST_AVATAR:
            return state;
        case RECEIVE_AVATAR:
            return {
                ...state,
                avatarUrl: action.avatar
            };
        default:
            return state;
    }
};