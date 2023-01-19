import './NotFound.css';

import { Link } from 'react-router-dom';

function NotFound() {

	return (
		<section className='not-found'>
			<h1 className='not-found__error-number'>
				404
			</h1>
			<p className='not-found__error-title'>
				Страница не найдена
			</p>
			<Link className='not-found__go-back-button' to="/">
				Назад
			</Link>
		</section>
	)
}

export default NotFound;