const API_BASE = 'https://api.github.com/graphql';

const headers = new Headers({
	Authorization: ''
});

const query = {
	query: 'query { viewer { login starredRepositories(first: 30) { totalCount edges { starredAt node { name owner { login } description} } }  }}'
};

const init = {
	method: 'POST',
	body: JSON.stringify(query),
	headers
};

export async function getData() {
	return await fetch(API_BASE, init);
}
