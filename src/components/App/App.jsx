import './App.css';
import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Main from '../Main/Main';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Profile from '../Profile/Profile.jsx';
import MoviesSaved from '../MoviesSaved/MoviesSaved';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';



function App() {
	const mainCurrentUser = {
		name: 'nikita',
		family: 'savchuk',
	}

	const [loggedIn, setLoggedIn] = useState(true);
	const [currentUser, setCurrentUser] = useState({});

	function logout() {
		setLoggedIn(false);
	}

	function handleBack() {
		window.history.back();
	}

	return (
		<CurrentUserContext.Provider value={currentUser}>

			<div className='page'>

				<Header
					loggedIn={loggedIn}
					handleBack={handleBack}
				/>

				<Routes>

					<Route
						exact
						path='/'
						element={
							<Main />
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
							<ProtectedRoute
								loggiedIn={loggedIn}
								element={
									<Profile
										logout={logout} />
								}
							/>
						}
					/>

					<Route
						path='/movies'
						element={
							<ProtectedRoute
								loggiedIn={loggedIn}
								element={
									<Movies />
								}
							/>
						}
					/>



					<Route
						path='/movies-saved'
						element={
							<ProtectedRoute
								loggiedIn={loggedIn}
								element={
									<MoviesSaved />
								}
							/>
						}
					/>

					<Route
						exact
						path='*'
						element={
							<NotFound
								handleBack={handleBack}
							/>
						}
					/>

				</Routes>

				<Footer />

			</div>

		</CurrentUserContext.Provider>
	);
}

export default App;