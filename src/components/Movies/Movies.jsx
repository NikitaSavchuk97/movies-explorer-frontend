import './Movies.css';

import More from '../More/More';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props) {

	const ROS = JSON.parse(localStorage.getItem('resultOfSearch'))

	return (
		<main className='movies'>

			<SearchForm
				handleSearchMovies={props.handleSearchMovies}
				searchInputData={props.searchInputData}
				likedMovies={false}
			/>

			<MoviesCardList
				notFoundMovies={props.notFoundMovies}
				loading={props.loading}
				likedMovies={false}
				movies={props.movies}
				isSaved={props.isSaved}
				serverError={props.serverError}
				saveMovie={props.handleLikeMovie}
				deleteMovie={props.handleDeleteMovie}
			/>

			{
				props.moreMoviesButton ?
					<>
						{
							ROS === null ?
								<More
									handleMoreMovies={props.handleMoreMovies}
								/>
								:
								<>
									{
										props.movies.length !== ROS.length ?
											<More
												handleMoreMovies={props.handleMoreMovies}
											/>
											:
											''
									}
								</>
						}
					</>
					:
					''
			}

		</main>
	)
}

export default Movies;