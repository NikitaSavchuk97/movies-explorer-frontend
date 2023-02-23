import './App.css';
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";


import Main from '../Main/Main';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import MoviesSaved from '../MoviesSaved/MoviesSaved';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import CurrentUserContext from '../../contexts/CurrentUserContext';

import { getApiMovies } from '../../utils/MoviesApi';
import { deleteMovie, getMovies, getUserInfo, likeMovie, setUserInfo } from '../../utils/MainApi';
import { login, logout, registr, validation } from '../../utils/Auth';



function App() {

	const location = useLocation();
	const navigate = useNavigate();
	const [movies, setMovies] = useState([]);
	const [loggedIn, setLoggedIn] = useState(true);
	const [moreMovies, setMoreMovies] = useState(0);
	const [savedMovies, setSavedMovies] = useState([]);
	const [currentUser, setCurrentUser] = useState({});
	const [serverError, setServerError] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		if (loggedIn) {
			getUserInfo()
				.then((user) => {
					if (user.status === 401) {
						setLoggedIn(false);
						console.log('Не авторизован')
						return
					} else {
						setLoggedIn(true);
						setCurrentUser(user);
						getSavedMovies();
						getApiMovies();
					}
				})
				.catch((err) => {
					console.log(err.message);
				})
		}
	}, [loggedIn]);

	function handleRegistr(name, email, password) {
		registr(name, email, password)
			.then(() => {
				handleLogin(email, password);
			})
			.catch((err) => {
				console.log(err.message);
			})
	}

	function handleLogin(email, password) {
		login(email, password)
			.then((res) => {
				if (res.message !== 'undefined' && res.message.startsWith('Выполнен вход в аккаунт')) {
					checkToken()
				} else if (res.status === 401 || 400) {
					console.log('Неверный пароль или емейл');
				}
			})
			.catch((err) => {
				console.log(err.message);
			})
	}



	function checkToken() {
		validation()
			.then((res) => {
				if (res.status === 401) {
					console.log('Включите Cookies в настройках браузера');
					return
				} else {
					handleGetUserInfo();
					setLoggedIn(true);
					navigate('/movies');
				}
			})
			.catch((err) => {
				console.log(err)
			})
	};



	function handleLogout() {
		logout()
			.then(() => {
				setLoggedIn(false);
				navigate('/');
			})
			.catch((err) => {
				console.log(err)
			})
	}

	function handleGetUserInfo() {
		getUserInfo()
			.then((user) => {
				setCurrentUser(user)
			})
			.catch((err) => {
				console.log(err);
			})
	}

	function handleSetUserInfo(name, email) {
		setUserInfo(name, email)
			.then((user) => {
				setCurrentUser(user)
			})
			.catch((err) => {
				console.log(err);
			})
	}

	function searchMovies(movieNameFromSearch, shortMovie) {
		getApiMovies()
			.then((movies) => {

				let movieName;

				if (movieNameFromSearch === null) {
					movieName = '';
				} else {
					movieName = movieNameFromSearch;
				}

				const resultOfMoviesSearch = movies.filter((item) => item.nameRU.toLowerCase().includes(movieName.toLowerCase()));
				const resultOfMoviesSearchWithMinDuration = shortMovie ? resultOfMoviesSearch.filter((item) => item.duration <= 40) : resultOfMoviesSearch;

				localStorage.setItem('resultOfSearch', JSON.stringify(resultOfMoviesSearchWithMinDuration));
				localStorage.setItem('movieName', movieName);
				localStorage.setItem('shortMovie', shortMovie);

				automaticResize();
			})
			.catch((err) => {
				console.log(err.message);
				setServerError(true);
			})
	}

	function automaticResize() {
		const resultOfSearch = JSON.parse(localStorage.getItem('resultOfSearch'));

		if (windowWidth >= 768) {
			setMovies(resultOfSearch.slice(0, 12))
			setMoreMovies(3)
		}

		if (windowWidth > 500 && windowWidth < 768) {
			setMovies(resultOfSearch.slice(0, 8))
			setMoreMovies(2)
		}

		if (windowWidth <= 500) {
			setMovies(resultOfSearch.slice(0, 5))
			setMoreMovies(2)
		}
	}

	function handleMoreMovies() {
		const resultOfSearch = JSON.parse(localStorage.getItem('resultOfSearch'));
		setMovies(resultOfSearch.slice(0, movies.length + moreMovies));
	}

	function getSavedMovies() {
		getMovies()
			.then((saved) => {
				setSavedMovies(saved)
			})
			.catch((err) => {
				console.log(err.message)
			})
	}

	function handleLikeMovie(movie) {
		likeMovie(movie)
			.then((movieData) => {
				setSavedMovies([...savedMovies, movieData])
			})
			.catch((err) => {
				console.log(err.message)
			})
	}

	function handleDeleteMovie(card) {
		const deleteCard = savedMovies.find(c => c.movieId === (card.id || card.movieId) && c.owner === currentUser._id)
		if (!deleteCard) { return };
		deleteMovie(deleteCard._id)
			.then(() => {
				setSavedMovies(savedMovies.filter(item => item._id !== deleteCard._id));
			})
			.catch((err) => {
				console.log(err);
			})
	}

	function handleSearchMovies(movieName, shortMovie) {
		searchMovies(movieName, shortMovie)
	}

	function isSaved(card) {
		return savedMovies.some(item => item.movieId === card.id && item.owner === currentUser._id)
	}

	return (
		<CurrentUserContext.Provider value={currentUser}>

			<div className='page'>

				<Routes>

					<Route
						exact
						path='/'
						element={
							<>
								<Header
									loggedIn={loggedIn}
									location={location}
								/>
								<Main />
								<Footer />
							</>
						}
					/>

					<Route
						path='/profile'
						element={
							<ProtectedRoute
								loggiedIn={loggedIn}
								element={
									<>
										<Header
											loggedIn={loggedIn}
											location={location}
										/>
										<Profile
											handleLogout={handleLogout}
											handleSetUserInfo={handleSetUserInfo}
										/>
										<Footer />
									</>
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
									<>
										<Header
											loggedIn={loggedIn}
											location={location}
										/>

										<Movies
											handleMoreMovies={handleMoreMovies}
											isSaved={isSaved}
											handleSearchMovies={handleSearchMovies}
											serverError={serverError}
											likedMovies={false}
											movies={movies}
											handleLikeMovie={handleLikeMovie}
											handleDeleteMovie={handleDeleteMovie}
											getSavedMovies={getSavedMovies}
										/>

										<Footer />
									</>
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
									<>
										<Header
											loggedIn={loggedIn}
											location={location}
										/>

										<MoviesSaved
											currentUser={currentUser}
											savedMovies={savedMovies}
											handleDeleteMovie={handleDeleteMovie}
											getSavedMovies={getSavedMovies}
										/>

										<Footer />
									</>
								}
							/>
						}
					/>

					<Route
						path='/sign-up'
						element={
							<Register
								registr={handleRegistr}
							/>
						}
					/>

					<Route
						path='/sign-in'
						element={
							<Login
								login={handleLogin}
							/>
						}
					/>

					<Route
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


/*

					
*/