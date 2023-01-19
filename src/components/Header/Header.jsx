import './Header.css';

import logo__authorized from '../../images/logo__authorized.svg';
import logo__unauthorized from '../../images/logo__unauthorized.svg';
import header__burger from '../../images/header__burger.svg';
import popup__closeButton from '../../images/popup__close-button.svg'
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useState } from 'react';



function Header({ loggedIn }) {

	const [popupOpen, setPopupOpen] = useState(false);

	function logo() {
		return (
			<Link className='header__logo' to='/'>
				<img className='header__logo-svg' src={!loggedIn ? logo__unauthorized : logo__authorized} alt={!loggedIn ? 'не авторизован' : 'авторизован'} />
			</Link>
		)
	}

	function handlePopupOpen() {
		document.body.style.cssText = `overflow:hidden`;
		setPopupOpen(true);
	}

	function handlePopupClose(evt) {
		if (evt.target === evt.currentTarget) {
			document.body.style.cssText = `padding-right: ${window.innerWidth - document.body.offsetWidth};`;
			setPopupOpen(false);
		}

	}


	function burgerButton() {
		return (
			<button className='header__burger' onClick={handlePopupOpen}>
				<img src={header__burger} alt="" />
			</button>
		)
	}

	function handleRefresh() {
		window.location.reload()
	}

	function handleBack() {
		window.history.back();
	}


	//header__popup ${popupOpen ? 'header__popup_type_active' : ''} 

	return (
		<Routes>

			<Route
				path='/'
				element={
					<section className='header'>

						<button className='header__logo' onClick={handleRefresh}>
							<img className='header__logo-svg' src={!loggedIn ? logo__unauthorized : logo__authorized} alt={!loggedIn ? 'не авторизован' : 'авторизован'} />
						</button>

						{
							!loggedIn ?
								<nav className='header__main'>

									<Link className='header__registration' to='/sign-up'>
										Регистрация
									</Link>

									<Link className='header__login-unauth' to='/sign-in'>
										Войти
									</Link>

								</nav>
								:
								<>
									<div className={`header__overlay ${popupOpen ? 'header__overlay_type_active' : ''}`} onClick={handlePopupClose}></div>
									<button className={`header__popup-close-button ${popupOpen ? 'header__popup-close-button_type_active' : ''}`} onClick={handlePopupClose}></button>

									<nav className={`header__main header__popup ${popupOpen ? 'header__popup_type_active' : ''} `}>

										<Link className='header__movies-auth' onClick={handlePopupClose} to='/movies-saved'>
											Сохраненные фильмы
										</Link>

										<Link className='header__movies-auth' onClick={handlePopupClose} to='/movies' >
											Фильмы
										</Link>

										<Link className='header__login-auth' onClick={handlePopupClose} to='/profile'>
											Профиль
										</Link>

									</nav>

									{
										burgerButton()
									}
								</>
						}
					</section>
				}
			/>

			< Route
				path='/movies'
				element={
					< section className='header header_type_dark' >
						{
							logo()
						}

						{
							<>
								<div className={`header__overlay ${popupOpen ? 'header__overlay_type_active' : ''}`} onClick={handlePopupClose}></div>
								<button className={`header__popup-close-button ${popupOpen ? 'header__popup-close-button_type_active' : ''}`} onClick={handlePopupClose}></button>

								<nav className={`header__main header__main_type_dark header__popup ${popupOpen ? 'header__popup_type_active' : ''} `}>

									<Link className='header__to-main' onClick={handlePopupClose} to='/'>
										На главную
									</Link>

									<Link className='header__movies-header-saved-movies' onClick={handlePopupClose} to='/movies-saved'>
										Сохраненные фильмы
									</Link>

									<p className='header__movies-header-movies-disabled'>
										Фильмы
									</p>

									<Link className='header__login-auth' onClick={handlePopupClose} to='/profile'>
										Профиль
									</Link>

								</nav>
							</>
						}

						{
							burgerButton()
						}
					</section >

				}
			/>

			< Route
				path='/movies-saved'
				element={
					<section section className='header header_type_dark' >
						{
							logo()
						}

						{
							<>
								<div className={`header__overlay ${popupOpen ? 'header__overlay_type_active' : ''}`} onClick={handlePopupClose}></div>
								<button className={`header__popup-close-button ${popupOpen ? 'header__popup-close-button_type_active' : ''}`} onClick={handlePopupClose}></button>

								<nav className={`header__main header__main_type_dark header__popup ${popupOpen ? 'header__popup_type_active' : ''} `}>

									<Link className='header__to-main' onClick={handlePopupClose} to='/'>
										На главную
									</Link>

									<p className='header__movies-saved-movies'>
										Сохраненные фильмы
									</p>

									<Link className='header__movies-movies' onClick={handlePopupClose} to='/movies'>
										Фильмы
									</Link>

									<Link className='header__login-auth' onClick={handlePopupClose} to='/profile'>
										Профиль
									</Link>

								</nav>
							</>
						}

						{
							burgerButton()
						}
					</section>
				}
			/>


			< Route
				path='/profile'
				element={
					<section section className='header header_type_dark' >
						{
							logo()
						}

						{

							<>
								<div className={`header__overlay ${popupOpen ? 'header__overlay_type_active' : ''}`} onClick={handlePopupClose}></div>
								<button className={`header__popup-close-button ${popupOpen ? 'header__popup-close-button_type_active' : ''}`} onClick={handlePopupClose}></button>

								<nav className={`header__main header__main_type_dark header__popup ${popupOpen ? 'header__popup_type_active' : ''} `}>


									<Link className='header__to-main' onClick={handlePopupClose} to='/'>
										На главную
									</Link>

									<Link className='header__profile-saved-movies' to='/movies-saved'>
										Сохраненные фильмы
									</Link>

									<Link className='header__profile-movies' to='/movies'>
										Фильмы
									</Link>

									<button className='header__login-auth' type='button' onClick={handleBack}>
										Назад
									</button>
								</nav>
							</>
						}

						{
							burgerButton()
						}
					</section >
				}
			/>

			< Route
				path='*'
				element={
					<>

					</>
				}
			/>

		</Routes >
	)
}

export default Header;