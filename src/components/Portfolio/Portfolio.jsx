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
					<a className='portfolio__link' target='blank' href="https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2667&q=80">
						Статичный сайт
					</a>
					<img src={link} alt="Стрелка" />
				</li>

				<li className='portfolio__item'>
					<a className='portfolio__link' target='blank' href="https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2667&q=80">
						Адаптивный сайт
					</a>
					<img src={link} alt="Стрелка" />
				</li>

				<li className='portfolio__item'>
					<a className='portfolio__link' target='blank' href="https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2667&q=80">
						Одностраничное приложение
					</a>
					<img src={link} alt="Стрелка" />
				</li>

			</ul>

		</section >
	)
}

export default Portfolio;