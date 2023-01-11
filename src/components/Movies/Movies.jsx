import './Movies.css';

import { Link } from 'react-router-dom';

import SearchForm from '../SearchForm/SearchForm';

import logo__authorized from '../../images/logo__authorized.svg';

function Movies() {
	return (
		<section className='movies'>
			<div className='movies__header'>
				<Link className='movies__logo' to='/'>
					<img className='movies__logo-svg' src={logo__authorized} alt="Логотип" />
				</Link>

				<Link to='/saved-movies' className='movies__saved-movies'>
					Сохраненные фильмы
				</Link>

				<Link className='movies__login-auth' to='/profile'>
					Профиль
				</Link>
			</div>

			<SearchForm />


			<div className='movies__grid'>

			</div>

		</section>
	)
}

export default Movies;