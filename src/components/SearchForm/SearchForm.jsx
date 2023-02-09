import './SearchForm.css';

function SearchForm() {
	return (
		<section className='search-form'>

			<form className='search-form__search-bar'>
				<input className='search-form__input' type="text" placeholder='Название фильма...' required />
				<button className='search-form__button' type='submit'>
					Найти
				</button>
			</form>

			<div className='search-form__checkbox-container'>
				<input className='search-form__checkbox-button' type="checkbox" />
				<label className="search-form__checkbox-label">Короткометражки</label>
			</div>

		</section >
	)
}

export default SearchForm;