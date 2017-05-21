import { getUserStarredRepos, getUserAvatar } from './githubService';

it('getUserStarredRepos should return a response', async () => {
	const response = await getUserStarredRepos('marcelmichau', 1);
	expect(response.status).toEqual(200);
});

it('getUserAvatar should return a response', async () => {
	const response = await getUserAvatar('marcelmichau');
	expect(response.status).toEqual(200);
});
