const BASE_URL = 'http://localhost:3001';

//http://localhost:3001
//https://api-snv-project-movies.ru

function dataServerAnswer(resolve) {
	if (resolve.ok) {
		return resolve.json()
	}
	return resolve
}

export const getUserInfo = () => {
	return fetch(`${BASE_URL}/users/me`, {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	})
		.then((resolve) => {
			return dataServerAnswer(resolve)
		})
}

export const setUserInfo = (name, email) => {
	return fetch(`${BASE_URL}/users/me`, {
		method: 'PATCH',
		credentials: 'include',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			name: name,
			email: email,
		})
	})
		.then((resolve) => {
			return dataServerAnswer(resolve)
		})
}

export const getMovies = () => {
	return fetch(`${BASE_URL}/movies`, {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	})
		.then((resolve) => {
			return dataServerAnswer(resolve)
		})
}

export const likeMovie = (movie) => {
	return fetch(`${BASE_URL}/movies`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			country: movie.country || 'Нет данных',
			director: movie.director,
			duration: movie.duration,
			year: movie.year,
			description: movie.description,
			image: (`https://api.nomoreparties.co/${movie.image.url}`),
			trailerLink: movie.trailerLink || 'https://www.youtube.com',
			thumbnail: (`https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`),
			movieId: movie.id,
			nameRU: movie.nameRU || 'Нет данных',
			nameEN: movie.nameEN || 'Нет данных'
		})
	})
		.then((resolve) => {
			return dataServerAnswer(resolve)
		})
}

export const deleteMovie = (movieId) => {
	return fetch(`${BASE_URL}/movies/${movieId}`, {
		method: 'DELETE',
		credentials: 'include',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	})
		.then((resolve) => {
			return dataServerAnswer(resolve)
		})
}