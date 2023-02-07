import './App.css';
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";


import Main from '../Main/Main';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Profile from '../Profile/Profile.jsx';
import MoviesSaved from '../MoviesSaved/MoviesSaved';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import CurrentUserContext from '../../contexts/CurrentUserContext';



function App() {

	const location = useLocation()
	const [loggedIn, setLoggedIn] = useState(true);
	const [currentUser, setCurrentUser] = useState({});

	function logout() {
		setLoggedIn(false);
	}


	return (
		<CurrentUserContext.Provider value={currentUser}>

			<div className='page'>

				<Routes>

					<Route
						path='/*'
						element={
							<>
								<Header
									loggedIn={loggedIn}
									location={location}
								/>

								<main>
									<Main />
								</main>

								<Footer />
							</>
						}
					/>

					<Route
						path='/profile/*'
						element={
							<ProtectedRoute
								loggiedIn={loggedIn}
								element={
									<>
										<Header
											loggedIn={loggedIn}
											location={location}
										/>

										<main>
											<Profile logout={logout} />
										</main>

										<Footer />
									</>
								}
							/>
						}
					/>

					<Route
						path='/movies/*'
						element={
							<ProtectedRoute
								loggiedIn={loggedIn}
								element={
									<>
										<Header
											loggedIn={loggedIn}
											location={location}
										/>

										<main>
											<Movies />
										</main>

										<Footer />
									</>
								}
							/>
						}
					/>

					<Route
						path='/movies-saved/*'
						element={
							<ProtectedRoute
								loggiedIn={loggedIn}
								element={
									<>
										<Header
											loggedIn={loggedIn}
											location={location}
										/>

										<main>
											<MoviesSaved />
										</main>

										<Footer />
									</>
								}
							/>
						}
					/>

					<Route
						path='/sign-up/*'
						element={
							<Register />
						}
					/>

					<Route
						path='/sign-in/*'
						element={
							<Login />
						}
					/>

					<Route
						exact
						path='*'
						element={
							<NotFound />
						}
					/>

				</Routes>

			</div>

		</CurrentUserContext.Provider>
	);
}

export default App;