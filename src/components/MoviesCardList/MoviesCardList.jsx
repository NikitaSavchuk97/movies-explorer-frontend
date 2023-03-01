import { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css'

function MoviesCardList(props) {

	const [arrOfLikedMovies, setArrOfLikedMovies] = useState([])

	useEffect(() => {
		if (props.likedMovies) {
			if (JSON.parse(localStorage.getItem('shortSavedMovie'))) {
				setArrOfLikedMovies(props.movies.filter((item) => item.owner === props.currentUser._id && item.duration <= 40));
			} else {
				setArrOfLikedMovies(props.movies.filter((item) => item.owner === props.currentUser._id));
			}
		} else {
			setArrOfLikedMovies(props.movies)
		}
	}, [props.movies]);

	if (props.movies.length === 0) {
		return (
			<span className='movies-card-list-empty'>
				Ничего не найдено
			</span>
		)
	}

	if (props.serverError) {
		return (
			<span className="movies-card-list-error">
				Во время запроса произошла ошибка.
				Возможно, проблема с соединением или сервер недоступен.
				Подождите немного и попробуйте ещё раз
			</span>
		)
	}

	//const resultOfSearch = JSON.parse(localStorage.getItem('resultOfSearch'))

	return (
		<>
			<section className='movies-card-list'>
				{
					arrOfLikedMovies.map((card) => {
						return (
							<MoviesCard
								location={props.location}
								currentUser={props.currentUser}
								isSaved={props.isSaved}
								key={props.likedMovies ? card.movieId : card.id}
								card={card}
								saveMovie={props.saveMovie}
								deleteMovie={props.deleteMovie}
								likedMovies={props.likedMovies}
							/>
						)
					})
				}
			</section>
		</>
	)
}

export default MoviesCardList;


/*
item.owner === props.currentUser._id && item.duration <= 40
*/