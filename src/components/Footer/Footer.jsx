import './Footer.css';

function Footer() {
	return (
		<section className='footer'>
			<h3 className='footer__title'>
				Учебный проект Яндекс.Практикум х BeatFilm.
			</h3>
			<div className='footer__links'>
				<span className='footer__span'>
					&copy; 2023
				</span>
				<a className='footer__link' href="#">
					Яндекс.Практикум
				</a>
				<a className='footer__link' href="#">
					Github
				</a>
			</div>
		</section>
	)
}

export default Footer;