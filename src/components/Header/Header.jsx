import './Header.css';

import logo__authorized from '../../images/logo__authorized.svg';
import logo__unauthorized from '../../images/logo__unauthorized.svg';
import { Routes, Route, Link, Navigate } from "react-router-dom";



function Header({ loggedIn, handleBack }) {
	return (

		<Routes>

			<Route
				path='/'
				element={
					<section className='header'>

						<Link className='header__logo' to='/'>
							<img className='header__logo-svg' src={!loggedIn ? logo__unauthorized : logo__authorized} alt={!loggedIn ? 'не авторизован' : 'авторизован'} />
						</Link>

						{
							!loggedIn ?
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

									<Link to='/movies-saved' className='header__movies-auth'>
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
				}
			/>

			<Route
				path='/movies'
				element={
					<section className='header-dark'>

						<Link className='header__logo' to='/'>
							<img className='header__logo-svg' src={!loggedIn ? logo__unauthorized : logo__authorized} alt={!loggedIn ? 'не авторизован' : 'авторизован'} />
						</Link>

						{
							<div className='header-main'>

								<Link className='header__movies-header-saved-movies' to='/movies-saved'>
									Сохраненные фильмы
								</Link>

								<p className='header__movies-header-movies-disabled'>
									Фильмы
								</p>

								<Link className='header__movies-header-login-auth' to='/profile'>
									Профиль
								</Link>
							</div>
						}

					</section>

				}
			/>

			<Route
				path='/movies-saved'
				element={
					<section className='header-dark'>

						<Link className='header__logo' to='/'>
							<img className='header__logo-svg' src={!loggedIn ? logo__unauthorized : logo__authorized} alt={!loggedIn ? 'не авторизован' : 'авторизован'} />
						</Link>

						{
							<div className='header-main'>
								<p className='header__movies-saved-movies'>
									Сохраненные фильмы
								</p>

								<Link className='header__movies-movies' to='/movies'>
									Фильмы
								</Link>

								<Link className='header__movies-saved-login-auth' to='/profile'>
									Профиль
								</Link>
							</div>
						}

					</section>

				}
			/>


			<Route
				path='/profile'
				element={
					<section className='header-dark'>

						<Link className='header__logo' to='/'>
							<img className='header__logo-svg' src={!loggedIn ? logo__unauthorized : logo__authorized} alt={!loggedIn ? 'не авторизован' : 'авторизован'} />
						</Link>

						{
							<div className='header-main'>
								<Link className='header__profile-saved-movies' to='/movies-saved'>
									Сохраненные фильмы
								</Link>

								<Link className='header__profile-movies' to='/movies'>
									Фильмы
								</Link>

								<button className='header__profile-login-auth' type='button' onClick={handleBack}>
									Назад
								</button>
							</div>
						}

					</section>

				}
			/>

			<Route
				path='*'
				element={
					<section className='header-dark'>
						<Link className='header__logo' to='/'>
							<img className='header__logo-svg' src={!loggedIn ? logo__unauthorized : logo__authorized} alt={!loggedIn ? 'не авторизован' : 'авторизован'} />
						</Link>

						<p className='header__error'>
							Вы определенно что-то сломали...
						</p>

					</section>

				}
			/>

		</Routes>

	)
}

export default Header;