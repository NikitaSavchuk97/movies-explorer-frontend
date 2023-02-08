import './Header.css';

import logo from '../../images/logo.svg';
import { Link, Route, Router } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import React from 'react';

function Header({ loggedIn, location }) {
	return (
		<header className={`header ${location.pathname !== '/' ? "dark" : ""}`}>

			<Link className='header__logo' to='/'>
				<img className='header__logo-svg' src={logo} alt='логотип' />
			</Link>

			<Navigation
				loggedIn={loggedIn}
				location={location}
			/>

		</header>
	)
}

export default Header;