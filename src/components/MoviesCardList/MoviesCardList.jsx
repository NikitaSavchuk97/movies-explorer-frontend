import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(props) {
  const { currentUser } = useSelector((state) => state.userSlice);
  const [arrOfLikedMovies, setArrOfLikedMovies] = useState([]);

  useEffect(() => {
    if (props.likedMovies) {
      if (JSON.parse(localStorage.getItem('shortSavedMovie'))) {
        setArrOfLikedMovies(
          props.movies.filter((item) => item.owner === currentUser._id && item.duration <= 40),
        );
      } else {
        setArrOfLikedMovies(props.movies.filter((item) => item.owner === currentUser._id));
      }
    } else {
      setArrOfLikedMovies(props.movies);
    }
  }, [props.movies]);

  if (props.notFoundMovies) {
    return <span className='movies-card-list-empty'>Ничего не найдено</span>;
  }

  if (props.serverError) {
    return (
      <span className='movies-card-list-error'>
        Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.
        Подождите немного и попробуйте ещё раз
      </span>
    );
  }

  return (
    <>
      <section className='movies-card-list'>
        {arrOfLikedMovies.map((card) => {
          return (
            <MoviesCard
              isSaved={props.isSaved}
              key={props.likedMovies ? card.movieId : card.id}
              card={card}
              saveMovie={props.saveMovie}
              deleteMovie={props.deleteMovie}
              likedMovies={props.likedMovies}
            />
          );
        })}
      </section>
    </>
  );
}

export default MoviesCardList;
