import './Promo.css'
import logo__earth from "../../images/logo__earth.svg"

function Promo() {
	return (
		<section className="promo">
			<div className='promo__container'>
				<div className='promo__text'>
					<h1 className='promo__title'>
						Учебный проект студента факультета Веб-разработки.
					</h1>
					<h2 className='promo__subtitle'>
						Листайте ниже, чтобы узнать больше про этот проект и его создателя.
					</h2>
				</div>
				<img className="promo__logo-earth" src={logo__earth} alt="логотип" />
			</div>

			<div className='promo__container-buttons'>
				<a className='promo__link' href='#about-project'>
					О проекте
				</a>

				<a className='promo__link' href='#about-technologies'>
					О технологиях
				</a>

				<a className='promo__link' href='#about-me'>
					О студенте
				</a>
			</div>

		</section>
	);
}

export default Promo;