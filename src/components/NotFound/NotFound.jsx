import './NotFound.css'

function NotFound(handleBack) {
	return (
		<section className='not-found'>
			<h1 className='not-found__error-number'>
				404
			</h1>
			<p className='not-found__error-title'>
				Страница не найдена
			</p>
			<button className='not-found__go-back-button' type='button' onClick={handleBack}>
				Назад
			</button>
		</section>
	)
}

export default NotFound;