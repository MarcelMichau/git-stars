import { getData } from './githubGraphQLService';

it('getData should return a response', async () => {
    const response = await getData();
    expect(response.status).toEqual(200);
});