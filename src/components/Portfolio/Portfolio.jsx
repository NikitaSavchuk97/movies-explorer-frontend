import './Portfolio.css'
import link from '../../images/link.svg'

function Portfolio() {
	return (
		<section className='portfolio'>

			<h4 className='portfolio__title'>
				Портфолио
			</h4>

			<a className='portfolio__link' href="https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2667&q=80">
				Статичный сайт
				<img src={link} alt="" />
			</a>

			<a className='portfolio__link' href="https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2667&q=80">
				Адаптивный сайт
				<img src={link} alt="" />
			</a>

			<a className='portfolio__link' href="https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2667&q=80">
				Одностраничное приложение
				<img src={link} alt="" />
			</a>
		</section>
	)
}

export default Portfolio;