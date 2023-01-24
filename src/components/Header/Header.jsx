import './Header.css';

import logo__authorized from '../../images/logo__authorized.svg';
import logo__unauthorized from '../../images/logo__unauthorized.svg';
import { Link, Route, Router } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import React from 'react';

function Header({ loggedIn, location }) {

	function handleReload() {
		window.location.reload();
	}

	return (
		<header className='header'>

			<>
				{
					location.pathname === '/' ?
						<Link className='header__logo' onClick={handleReload}>
							<img className='header__logo-svg' src={!loggedIn ? logo__unauthorized : logo__authorized} alt={!loggedIn ? 'не авторизован' : 'авторизован'} />
						</Link>
						:
						<Link className='header__logo' to='/'>
							<img className='header__logo-svg' src={!loggedIn ? logo__unauthorized : logo__authorized} alt={!loggedIn ? 'не авторизован' : 'авторизован'} />
						</Link>
				}
			</>

			<Navigation
				loggedIn={loggedIn}
				location={location}
			/>
		</header>
	)
}

export default Header;