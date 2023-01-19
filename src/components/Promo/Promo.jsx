import './Promo.css'
import logo__earth from "../../images/logo__earth.svg"
import NavTab from '../NavTab/NavTab';

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

			<NavTab />

		</section>
	);
}

export default Promo;