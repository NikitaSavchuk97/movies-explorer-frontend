import './NotFound.css';

import { Link } from 'react-router-dom';

function NotFound() {

	function handleBack() {
		window.history.back();
	}

	return (
		<section className='not-found'>
			<h1 className='not-found__error-number'>
				404
			</h1>
			<p className='not-found__error-title'>
				Страница не найдена
			</p>
			<Link className='not-found__go-back-button' onClick={handleBack}>
				Назад
			</Link>
		</section>
	)
}

export default NotFound;