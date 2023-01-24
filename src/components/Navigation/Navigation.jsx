import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import header__burger from '../../images/header__burger.svg';
import './Navigation.css';

function Navigation({ loggedIn, location }) {

	const [popupOpen, setPopupOpen] = useState(false);

	function handlePopupOpen() {
		document.body.style.cssText = `overflow:hidden`;
		setPopupOpen(true);
	}

	function handlePopupClose(evt) {
		if (evt.target === evt.currentTarget) {
			document.body.style.cssText = ``;
			setPopupOpen(false);
		}
	}

	function handleBack() {
		window.history.back();
		document.body.style.cssText = ``;
		setPopupOpen(false);
	}

	return (
		!loggedIn ?

			<nav className='navigation__main navigation__unauth-buttons'>

				<NavLink className='navigation__registration' to='/sign-up'>
					Регистрация
				</NavLink>

				<NavLink className='navigation__login-unauth' to='/sign-in'>
					Войти
				</NavLink>

			</nav>

			:

			<>
				<div className={`navigation__overlay ${popupOpen ? 'navigation__overlay_type_active' : ''}`} onClick={handlePopupClose}></div>
				<button className={`navigation__popup-close-button ${popupOpen ? 'navigation__popup-close-button_type_active' : ''}`} onClick={handlePopupClose}></button>

				<nav className={`navigation__main navigation__popup ${popupOpen ? 'navigation__popup_type_active' : ''} `}>

					<NavLink
						className={`${location.pathname === '/' ? 'navigation__to-main-active ' : 'navigation__to-main'}`}
						onClick={handlePopupClose}
						to='/'
					>
						На главную
					</NavLink>

					<NavLink
						className={`${location.pathname === '/movies-saved' ? 'navigation__movies-auth-active ' : 'navigation__movies-auth'}`}
						onClick={handlePopupClose}
						to='/movies-saved'
					>
						Сохраненные фильмы
					</NavLink>

					<NavLink
						className={`${location.pathname === '/movies' ? 'navigation__movies-auth-active' : 'navigation__movies-auth'}`}
						onClick={handlePopupClose}
						to='/movies'
					>
						Фильмы
					</NavLink>

					<>
						{
							location.pathname === '/profile'
								?
								<NavLink
									className='navigation__login-auth'
									onClick={handleBack}
								>
									Назад
								</NavLink>
								:
								<NavLink
									className='navigation__login-auth'
									onClick={handlePopupClose}
									to='/profile'
								>
									Профиль
								</NavLink>
						}
					</>

				</nav>

				<button className='navigation__burger' onClick={handlePopupOpen}>
					<img src={header__burger} alt="" />
				</button>
			</>
	)
}

export default Navigation;


/*

*/