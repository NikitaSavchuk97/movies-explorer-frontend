import { Link } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './MoviesSaved.css'

import logo__authorized from '../../images/logo__authorized.svg';

function MoviesSaved() {
	return (
		<section className='movies-saved'>
			<SearchForm />

			<MoviesCardList />

		</section>
	)
}

export default MoviesSaved;