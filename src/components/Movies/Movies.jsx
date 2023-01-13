import './Movies.css';

import { Link } from 'react-router-dom';

import SearchForm from '../SearchForm/SearchForm';

import logo__authorized from '../../images/logo__authorized.svg';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
	return (
		<section className='movies'>

			<SearchForm />

			<MoviesCardList />

		</section>
	)
}

export default Movies;