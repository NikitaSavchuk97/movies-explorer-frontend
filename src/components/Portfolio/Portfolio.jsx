import './Portfolio.css'
import link from '../../images/link.svg'

function Portfolio() {
	return (
		<section className='portfolio'>

			<h4 className='portfolio__title'>
				Портфолио
			</h4>

			<ul className='portfolio__list'>

				<li className='portfolio__item'>
					<a className='portfolio__link' target='blank' href="https://snv-project-trucks.ru/">
						Многостраничный адаптивный сайт (в разработке)
						<img className='portfolio__icon' src={link} alt="Стрелка" />
					</a>
				</li>

				<li className='portfolio__item'>
					<a className='portfolio__link' target='blank' href="https://snv-project-mesto.ru/">
						Одностраничное приложение
						<img className='portfolio__icon' src={link} alt="Стрелка" />
					</a>
				</li>

				<li className='portfolio__item'>
					<a className='portfolio__link' target='blank' href="https://nikitasavchuk97.github.io/russian-travel/">
						Адаптивный сайт
						<img src={link} alt="Стрелка" />
					</a>
				</li>

				<li className='portfolio__item'>
					<a className='portfolio__link' target='blank' href="https://nikitasavchuk97.github.io/how-to-learn/">
						Статичный сайт
						<img src={link} alt="Стрелка" />
					</a>
				</li>

			</ul>

		</section >
	)
}

export default Portfolio;