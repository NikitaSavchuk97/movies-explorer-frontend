import './MoviesCard.css'

import moviesNotLiked from '../../images/movies__not-liked.svg';
import moviesLiked from '../../images/movies__liked.svg'

function MoviesCard(props) {

	const nameRU = props.card.nameRU;
	const image = props.likedMovies ? props.card.image : `https://api.nomoreparties.co/${props.card.image.url}`;
	const trailerLink = props.card.trailerLink;
	const duration = props.card.duration;

	function handleCardLike() {
		props.saveMovie(props.card);
	}

	function handleCardDelete() {

		props.deleteMovie(props.card);
	}

	return (
		<section className='movies-card'>

			<div className='movies-card__container'>

				<div className='movies-card__info'>
					<h3 className='movies-card__title'>
						{nameRU}
					</h3>
					<p className='movies-card__time'>
						{duration}
					</p>
				</div>

				{
					props.likedMovies ?
						<button className='movies-card__like' onClick={handleCardDelete}>
							<img className='movies-card__like-logo' src={moviesLiked} alt='удалить' />
						</button>
						:
						(
							props.isSaved(props.card) ?
								<button className='movies-card__like' onClick={handleCardDelete}>
									<img className='movies-card__like-logo' src={moviesLiked} alt='удалить' />
								</button>
								:
								<button className='movies-card__like' onClick={handleCardLike}>
									<img className='movies-card__like-logo' src={moviesNotLiked} alt='в избранное' />
								</button>
						)
				}
			</div>

			<a className='movies-card__link' href={trailerLink} target='blank'>
				<img className='movies-card__image' src={image} alt={nameRU} />
			</a>

		</section>
	)
}

export default MoviesCard;

/*




<button className='movies-card__like' onClick={props.likedMovies ? handleCardDelete : handleCardLike}>
					<img className='movies-card__like-logo' src={props.likedMovies ? moviesLiked : moviesNotLiked} alt={props.likedMovies ? 'удалить' : 'в избранное'} />
				</button>
*/
