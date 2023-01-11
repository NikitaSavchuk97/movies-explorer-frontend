import './Portfolio.css'
import link from '../../images/link.svg'

function Portfolio() {
	return (
		<section className='portfolio'>

			<h4 className='portfolio__title'>
				Портфолио
			</h4>

			<a className='portfolio__link' href="#">
				Статичный сайт
				<img src={link} alt="" />
			</a>

			<a className='portfolio__link' href="#">
				Адаптивный сайт
				<img src={link} alt="" />
			</a>

			<a className='portfolio__link' href="#">
				Одностраничное приложение
				<img src={link} alt="" />
			</a>
		</section>
	)
}

export default Portfolio;