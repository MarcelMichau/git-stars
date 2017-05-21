const API_BASE = 'http://localhost:3001/';

export async function authUser() {
	return await fetch(`${API_BASE}auth`);
}
