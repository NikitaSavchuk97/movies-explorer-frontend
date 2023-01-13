import './MoviesCard.css'

import moviesNotLiked from '../../images/movies__not-liked.svg';

function MoviesCard() {
	return (
		<section className='movies-card'>

			<div className='movies-card__container'>

				<div className='movies-card__info'>
					<h3 className='movies-card__title'>
						33 слова о дизайне
					</h3>
					<p className='movies-card__time'>
						{`${'1ч.45м'}`}
					</p>
				</div>

				<button className='movies-card__like'>
					<img className='movies-card__like-logo' src={moviesNotLiked} alt="в избранное" />
				</button>

			</div>

			<img className='movies-card__image' src="https://images.unsplash.com/photo-1673493642650-02675ed56e82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1856&q=80" alt="" />

		</section>
	)
}

export default MoviesCard;
