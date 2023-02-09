import './Footer.css';

function Footer() {

	return (
		<footer className='footer'>

			<h3 className='footer__title'>
				Учебный проект Яндекс.Практикум х BeatFilm.
			</h3>

			<div className='footer__links'>

				<span className='footer__span'>
					&copy; 2023
				</span>

				<a className='footer__link' href="https://practicum.yandex.ru/" target='blank'>
					Яндекс.Практикум
				</a>

				<a className='footer__link' href="https://github.com/" target='blank'>
					Github
				</a>

			</div>

		</footer>
	)
}

export default Footer;

