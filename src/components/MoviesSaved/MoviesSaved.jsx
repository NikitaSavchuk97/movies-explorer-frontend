import { useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './MoviesSaved.css'

function MoviesSaved(props) {
	const [filteredMovies, setFilteredMovies] = useState([]);

	useEffect(() => {
		setFilteredMovies(props.savedMovies.filter(movie => props.savedMovies.some(card => movie.movieId === card.movieId)))
	}, [props.savedMovies])

	useEffect(() => {
		setToStateSavedMovies()
	}, [])

	function setToStateSavedMovies() {
		setFilteredMovies(props.savedMovies);
	}

	function handleSearchSavedMovies(movieName, shortMovie) {
		const resultOfMoviesSearch = props.savedMovies.filter((item) => item.nameRU.toLowerCase().includes(movieName.toLowerCase()));
		const resultOfMoviesSearchWithMinDuration = shortMovie ? resultOfMoviesSearch.filter((item) => item.duration <= 40) : resultOfMoviesSearch;

		localStorage.setItem('shortSavedMovie', shortMovie);

		setFilteredMovies(resultOfMoviesSearchWithMinDuration);
	}

	return (
		<main className='movies-saved'>
			<SearchForm
				handleSearchMovies={handleSearchSavedMovies}
				searchInputData={''}
				likedMovies={true}
			/>

			<MoviesCardList
				likedMovies={true}
				movies={filteredMovies}
				currentUser={props.currentUser}
				deleteMovie={props.handleDeleteMovie}
				getSavedMovies={props.getSavedMovies}
			/>
		</main>
	)
}

export default MoviesSaved;

/*



*/