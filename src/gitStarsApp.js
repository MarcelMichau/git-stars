import * as actionTypes from './constants/actionTypes';

const initialState = {
	username: '',
	avatarUrl: '',
	isLoading: false,
	currentPage: 1,
	repos: []
};

function gitStarsApp(state = initialState, action) {
	switch (action.type) {
		case actionTypes.CLEAN_STATE:
			return {
				...state,
				repos: [],
				currentPage: 1,
				isLoading: false
			};

		case actionTypes.UPDATE_USER:
			return {
				...state,
				username: action.value
			};

		case actionTypes.LOAD_MORE_REPOS:
			return {
				...state,
				currentPage: state.currentPage + 1
			};

		case actionTypes.REQUEST_REPOS:
			return {
				...state,
				isLoading: true
			};

		case actionTypes.RECEIVE_REPOS:
			return {
				...state,
				isLoading: false,
				repos: [...state.repos, ...action.repos]
			};

		case actionTypes.REQUEST_AVATAR:
			return state;

		case actionTypes.RECEIVE_AVATAR:
			return {
				...state,
				avatarUrl: action.avatar
			};

		default:
			return state;
	}
}

export default gitStarsApp;
