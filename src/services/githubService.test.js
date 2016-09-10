import githubService from './githubService';

it('getUserStarredRepos should return a response', async () => {
    const response = await githubService().getUserStarredRepos('marcelmichau', 1);
    expect(response.status).toEqual(200);
});

it('getUserAvatar should return a response', async () => {
    const response = await githubService().getUserAvatar('marcelmichau');
    expect(response.status).toEqual(200);
});