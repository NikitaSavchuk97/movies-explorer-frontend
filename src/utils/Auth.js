const BASE_URL = 'https://api-snv-project-movies.ru';

//http://localhost:3001
//https://api-snv-project-movies.ru

function dataServerAnswer(resolve) {
	if (resolve.ok) {
		return resolve.json()
	}
	return resolve
}

export const registr = (name, email, password) => {
	return fetch(`${BASE_URL}/signup`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			name, email, password
		})
	})
		.then((resolve) => {
			return dataServerAnswer(resolve)
		})
}

export const login = (email, password) => {
	return fetch(`${BASE_URL}/signin`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			'set-cookie': 'jwt=token; SameSite=None; Secure',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email, password
		})
	})
		.then((resolve) => {
			return dataServerAnswer(resolve);
		})
}

export const validation = () => {
	return fetch(`${BASE_URL}/users/me`, {
		method: 'GET',
		credentials: 'include',
		headers: {
			'set-cookie': 'jwt=token; SameSite=None; Secure',
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
	})
		.then((resolve) => {
			return dataServerAnswer(resolve)
		})
}


export const logout = () => {
	return fetch(`${BASE_URL}/signout`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			'set-cookie': 'jwt=token; SameSite=None; Secure',
			'Content-Type': 'application/json'
		}
	})
		.then((resolve) => {
			return dataServerAnswer(resolve);
		})
}