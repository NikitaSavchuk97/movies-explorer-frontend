import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Main from '../Main/Main';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import InfoTool from '../InfoTool/InfoTool';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import MoviesSaved from '../MoviesSaved/MoviesSaved';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import { deleteMovie, getMovies, likeMovie } from '../../utils/MainApi';

import { useSelector, useDispatch } from 'react-redux';
import { setMovie } from '../../redux/slices/movieSlice';
import { setLoggedIn } from '../../redux/slices/loggedSlice';
import { getUser } from '../../redux/slices/userSlice';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [moreMovies, setMoreMovies] = useState(0);
  const [savedMovies, setSavedMovies] = useState([]);
  const [serverError, setServerError] = useState(false);
  const [moreMoviesButton, setMoreMoviesButton] = useState(false);
  const [notFoundMovies, setNotFoundMovies] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { movie, status } = useSelector((state) => state.movieSlice);
  const { currentUser, registerUserStatus, currentUserStatus } = useSelector(
    (state) => state.userSlice,
  );
  const { loggedIn } = useSelector((state) => state.loggedSlice);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  useEffect(() => {
    if (loggedIn) {
      //dispatch(getMovie());
      //dispatch(getUser());
      // if (JSON.parse(localStorage.getItem('resultOfSearch')) === null) {
      //   //console.log(movie);
      //   localStorage.setItem('beatFilmApi', movie);
      // } else if (status === 'error') {
      //   setServerError(true);
      // }
      //automaticResize();
      //getSavedMovies();
      //setMoreMoviesButton(false);
      //dispatch(setLoggedIn(true));
    } else if (Object.keys(currentUser).length !== 0 && currentUser.constructor === Object) {
      dispatch(setLoggedIn(true));
    }
    setWindowWidth(window.innerWidth);
  }, [dispatch, loggedIn, windowWidth, currentUserStatus, registerUserStatus, currentUser]);

  function searchMovies(movieNameFromSearch, shortMovie) {
    console.log(movieNameFromSearch, shortMovie);
    console.log(localStorage.getItem('beatFilmApi'));
    const beatFilmApi = JSON.parse(localStorage.getItem('beatFilmApi'));
    //console.log(beatFilmApi);
    let movieName;
    if (movieNameFromSearch === null) {
      movieName = '';
    } else {
      movieName = movieNameFromSearch;
    }
    const resultOfMoviesSearch = beatFilmApi.filter((item) =>
      item.nameRU.toLowerCase().includes(movieName.toLowerCase()),
    );
    const resultOfMoviesSearchWithMinDuration = shortMovie
      ? resultOfMoviesSearch.filter((item) => item.duration <= 40)
      : resultOfMoviesSearch;
    if (resultOfMoviesSearchWithMinDuration.length === 0) {
      setNotFoundMovies(true);
    } else {
      setNotFoundMovies(false);
      setMoreMoviesButton(true);
    }
    dispatch(setMovie(resultOfMoviesSearchWithMinDuration));
    localStorage.setItem('resultOfSearch', JSON.stringify(resultOfMoviesSearchWithMinDuration));
    localStorage.setItem('movieName', movieName);
    localStorage.setItem('shortMovie', shortMovie);
    automaticResize();
  }

  function automaticResize() {
    const resultOfSearch = JSON.parse(localStorage.getItem('resultOfSearch'));

    if (windowWidth >= 768) {
      dispatch(setMovie(resultOfSearch.slice(0, 12)));
      setMoreMovies(3);
      setMoreMoviesButton(true);
    }

    if (windowWidth > 500 && windowWidth < 768) {
      dispatch(setMovie(resultOfSearch.slice(0, 8)));
      setMoreMovies(2);
      setMoreMoviesButton(true);
    }

    if (windowWidth <= 500) {
      dispatch(setMovie(resultOfSearch.slice(0, 5)));
      setMoreMovies(2);
      setMoreMoviesButton(true);
    }
  }

  function handleMoreMovies() {
    const resultOfSearch = JSON.parse(localStorage.getItem('resultOfSearch'));
    dispatch(setMovie(resultOfSearch.slice(0, movie.length + moreMovies)));
  }

  function getSavedMovies() {
    getMovies()
      .then((saved) => {
        setSavedMovies(saved);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function handleLikeMovie(movie) {
    likeMovie(movie)
      .then((movieData) => {
        setSavedMovies([...savedMovies, movieData]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function handleDeleteMovie(card) {
    const deleteCard = savedMovies.find(
      (c) => c.movieId === (card.id || card.movieId) && c.owner === currentUser._id,
    );
    if (!deleteCard) {
      return;
    }
    deleteMovie(deleteCard._id)
      .then(() => {
        setSavedMovies(savedMovies.filter((item) => item._id !== deleteCard._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSearchMovies(movieName, shortMovie) {
    searchMovies(movieName, shortMovie);
  }

  function isSaved(card) {
    return savedMovies.some((item) => item.movieId === card.id && item.owner === currentUser._id);
  }

  return (
    <div className='page'>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
        />

        <Route
          path='/profile'
          element={
            <ProtectedRoute
              element={
                <>
                  <Header />
                  <Profile />
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
              element={
                <>
                  <Header />

                  <Movies
                    moreMoviesButton={moreMoviesButton}
                    notFoundMovies={notFoundMovies}
                    searchInputData={localStorage.getItem('movieName')}
                    handleMoreMovies={handleMoreMovies}
                    isSaved={isSaved}
                    handleSearchMovies={handleSearchMovies}
                    serverError={serverError}
                    likedMovies={false}
                    movies={movie}
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
              element={
                <>
                  <Header />

                  <MoviesSaved
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

        <Route path='/sign-up' element={<Register />} />

        <Route path='/sign-in' element={<Login />} />

        <Route path='*' element={<NotFound />} />
      </Routes>

      <InfoTool />
    </div>
  );
}

export default App;
