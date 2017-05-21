import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
	REQUEST_REPOS,
	REQUEST_AVATAR,
	LOAD_MORE_REPOS,
	requestRepos,
	receiveRepos,
	receiveAvatar
} from './actions';
import { getUserStarredRepos, getUserAvatar } from './services/githubService';

function* fetchRepos(action) {
	try {
		const state = yield select();
		const result = yield call(
			getUserStarredRepos,
			action.value,
			state.currentPage
		);
		yield put(receiveRepos(action.value, result.data));
	} catch (error) {
		console.log(error);
	}
}

function* fetchAvatar(action) {
	try {
		const result = yield call(getUserAvatar, action.value);
		yield put(receiveAvatar(action.value, result.data));
	} catch (error) {
		console.log(error);
	}
}
function* loadMoreRepos(action) {
	try {
		yield put(requestRepos(action.value));
	} catch (error) {
		console.log(error);
	}
}

export default function* rootSaga() {
	yield takeLatest(REQUEST_REPOS, fetchRepos);
	yield takeLatest(REQUEST_AVATAR, fetchAvatar);
	yield takeLatest(LOAD_MORE_REPOS, loadMoreRepos);
}
