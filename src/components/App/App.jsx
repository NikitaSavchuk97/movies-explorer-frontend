import logo from '../../images/logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Main from '../Main/Main';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile.jsx';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Movies from '../Movies/Movies';




function App() {
	const mainCurrentUser = {
		name: 'nikita',
		family: 'savchuk',
	}

	const [loggedIn, setLoggedIn] = useState(true);
	const [currentUser, setCurrentUser] = useState({});


	return (
		<CurrentUserContext.Provider value={currentUser}>

			<div className='page'>

				<Routes>
					<Route
						path='/'
						element={
							<>
								<Header loggedIn={loggedIn} />
								<Main />
							</>
						}
					/>

					<Route
						path='/movies'
						element={
							<Movies />
						}
					/>

					<Route
						path='/sign-up'
						element={
							<Register />
						}
					/>

					<Route
						path='/sign-in'
						element={
							<Login />
						}
					/>

					<Route
						path='/profile'
						element={
							<Profile />
						}
					/>

				</Routes>
			</div>

		</CurrentUserContext.Provider>

	);
}

export default App;


/*
	

	<Register />
							<Login />
*/