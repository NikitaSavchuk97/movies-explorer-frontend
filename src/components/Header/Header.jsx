import './Header.css';

import logo__authorized from '../../images/logo__authorized.svg';
import logo__unauthorized from '../../images/logo__unauthorized.svg';
import { Link } from 'react-router-dom';

function Header({ loggedIn, dark }) {

	return (
		<section className='header'>
			<a className='header__logo' href='#about-me'>
				<img className='header__logo-svg' src={!loggedIn ? logo__unauthorized : logo__authorized} alt={!loggedIn ? 'не авторизован' : 'авторизован'} />
			</a>
			{
				!loggedIn
					?
					<div className='header__unauth-buttons'>

						<Link to='/sign-up' className='header__registration'>
							Регистрация
						</Link>

						<Link to='/sign-in' className='header__login-unauth'>
							Войти
						</Link>

					</div>
					:
					<div className='header__auth-buttons'>

						<Link to='/saved-movies' className='header__movies-auth'>
							Сохраненные фильмы
						</Link>

						<Link to='/movies' className='header__movies-auth'>
							Фильмы
						</Link>

						<Link to='/profile' className='header__login-auth'>
							Профиль
						</Link>

					</div>

			}
		</section>
	)
}

export default Header;