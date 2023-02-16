import './Movies.css';

import More from '../More/More';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useState } from 'react';

function Movies(props) {

	return (
		<main className='movies'>

			<SearchForm
				handleSearchMovies={props.handleSearchMovies}
				searchInputData={localStorage.getItem('movieName')}
				likedMovies={false}
			/>

			<MoviesCardList
				likedMovies={false}
				movies={props.movies}
				isSaved={props.isSaved}
				serverError={props.serverError}
				saveMovie={props.handleLikeMovie}
				deleteMovie={props.handleDeleteMovie}
			/>

			{
				props.movies.length !== JSON.parse(localStorage.getItem('resultOfSearch')).length ?
					<More
						handleMoreMovies={props.handleMoreMovies}
					/>
					:
					<></>
			}

		</main>
	)
}

export default Movies;