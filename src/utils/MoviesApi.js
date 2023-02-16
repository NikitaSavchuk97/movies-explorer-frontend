const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

//http://localhost:3000
//https://api.nomoreparties.co/beatfilm-movies

function dataServerAnswer(resolve) {
	if (resolve.ok) {
		return resolve.json()
	}
	return resolve
}

export const getApiMovies = () => {
	return fetch(BASE_URL, {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	})
		.then((resolve) => {
			return dataServerAnswer(resolve)
		})
}