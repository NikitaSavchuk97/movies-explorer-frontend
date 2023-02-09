import './Movies.css';

import { Link } from 'react-router-dom';

import SearchForm from '../SearchForm/SearchForm';

import logo from '../../images/logo.svg';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
	return (
		<section className='movies'>

			<SearchForm />

			<MoviesCardList />

			<button className='movies__more'>
				Еще
			</button>

		</section>
	)
}

export default Movies;