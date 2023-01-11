import './SearchForm.css';

function SearchForm() {
	return (
		<section className='search-form'>
			<form className='search-form__search-bar'>
				<input className='search-form__input' type="text" placeholder='Название фильма...' />
				<button className='search-form__button' type='submit'>
					Найти
				</button>
			</form>

			<div className='search-form__checkbox-container'>
				<input className='search-form__checkbox' type="checkbox" />
				<label htmlFor="">Короткометражки</label>
			</div>

		</section>
	)
}

export default SearchForm;