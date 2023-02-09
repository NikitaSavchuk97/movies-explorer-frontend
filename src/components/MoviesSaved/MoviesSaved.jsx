import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './MoviesSaved.css'

function MoviesSaved() {
	return (
		<section className='movies-saved'>
			<SearchForm />

			<MoviesCardList />

		</section>
	)
}

export default MoviesSaved;