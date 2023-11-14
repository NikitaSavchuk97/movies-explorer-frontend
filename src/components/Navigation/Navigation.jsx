import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import header__burger from '../../images/header__burger.svg';
import profile__logo from '../../images/profile__logo.svg';
import './Navigation.css';

function Navigation({ location }) {
  const { loggedIn } = useSelector((state) => state.loggedSlice);
  const [popupOpen, setPopupOpen] = useState(false);

  function handlePopupOpen() {
    setPopupOpen(true);
  }

  function handlePopupClose(evt) {
    if (evt.target === evt.currentTarget) {
      setPopupOpen(false);
    }
  }

  function handleBack() {
    window.history.back();
    setPopupOpen(false);
  }

  return !loggedIn ? (
    <nav className='navigation navigation__unauth-buttons'>
      <NavLink className='navigation__registration' to='/sign-up'>
        Регистрация
      </NavLink>

      <NavLink className='navigation__login-unauth' to='/sign-in'>
        Войти
      </NavLink>
    </nav>
  ) : (
    <>
      <div className={`${popupOpen ? 'overlay' : ''}`} onClick={handlePopupClose}>
        <nav className={`navigation ${popupOpen ? 'overlay__popup' : ''} `}>
          <button
            className={`navigation__popup-close-button ${
              popupOpen ? 'navigation__popup-close-button_type_active' : ''
            }`}
            onClick={handlePopupClose}
          ></button>

          <NavLink
            className={`${
              location.pathname === '/' ? 'navigation__to-main-active ' : 'navigation__to-main'
            }`}
            onClick={handlePopupClose}
            to='/'
          >
            На главную
          </NavLink>

          <NavLink
            className={`${
              location.pathname === '/movies'
                ? 'navigation__movies-auth-active'
                : 'navigation__movies-auth'
            }`}
            onClick={handlePopupClose}
            to='/movies'
          >
            Фильмы
          </NavLink>

          <NavLink
            className={`${
              location.pathname === '/movies-saved'
                ? 'navigation__movies-auth-active '
                : 'navigation__movies-auth'
            }`}
            onClick={handlePopupClose}
            to='/movies-saved'
          >
            Сохраненные фильмы
          </NavLink>

          <>
            {location.pathname === '/profile' ? (
              <NavLink className='navigation__login-auth-back' onClick={handleBack}>
                Назад
              </NavLink>
            ) : (
              <NavLink className='navigation__login-auth' onClick={handlePopupClose} to='/profile'>
                <p>Аккаунт</p>
                <img src={profile__logo} alt='' />
              </NavLink>
            )}
          </>
        </nav>
      </div>

      <button className='burger' onClick={handlePopupOpen}>
        <img src={header__burger} alt='кнопка меню' />
      </button>
    </>
  );
}

export default Navigation;
