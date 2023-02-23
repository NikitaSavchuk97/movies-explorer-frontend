import { useEffect, useState } from 'react';
import './SearchForm.css';

function SearchForm(props) {

	const [movieName, setMovieName] = useState('');
	const [checkbox, setCheckbox] = useState(false);

	function handleChangeMovieName(e) {
		setMovieName(e.target.value);
	}

	function handleChangeCheckbox(e) {
		const shortMovie = e.target.checked
		setCheckbox(shortMovie);
		props.handleSearchMovies(movieName, shortMovie)
	}

	function handleSubmit(e) {
		e.preventDefault();
		props.handleSearchMovies(movieName, checkbox)
	}

	useEffect(() => {
		if (props.likedMovies) {
			setMovieName(props.searchInputData)
			setCheckbox(JSON.parse(localStorage.getItem('shortSavedMovie')));
		} else {
			setMovieName(props.searchInputData)
			setCheckbox(JSON.parse(localStorage.getItem('shortMovie')));
		}
	}, [])

	return (
		<section className='search-form' onSubmit={handleSubmit}>

			<form >

				<div className='search-form__search-bar'  >
					<input className='search-form__input' value={movieName || ''} onChange={handleChangeMovieName} type="text" name='movie' placeholder='Название фильма...' required />
					<button className='search-form__button' onSubmit={handleSubmit} type='submit'>
						Найти
					</button>
				</div>

				<div className='search-form__checkbox-container'>
					<input className='search-form__checkbox-button' checked={checkbox} onChange={handleChangeCheckbox} type="checkbox" name="shortMovie" />
					<label className="search-form__checkbox-label">Короткометражки</label>
				</div>

			</form>


		</section >
	)
}

export default SearchForm;