import './AboutMe.css';

import NS97 from '../../images/NikitaSavchuk1997.jpg'

function AboutMe() {
	return (
		<section className='about-me' id='about-me'>

			<h2 className='about-me__student'>
				Студент
			</h2>

			<div className='about-me__container'>
				<div className='about-me__text'>
					<h3 className='about-me__name'>
						Никита
					</h3>
					<h4 className='about-me__title'>
						Фронтенд разработчик, 25 лет
					</h4>
					<p className='about-me__subtitle'>
						Родился в Саратовской области, г.Вольск, в 7 лет переехал в Москву, закончил Колледж Автомобильного Транспорта №9.
						Спустя 5 лет после работы в автомобильной сфере, понял что не нравится эта деятельность.
						Увлекся майнингом, это и предопределило мое направление, решил пойти учиться в институт на направление 	&laquo;Информатика и вычислительная техника&raquo;.
						Через полгода узнал о WEB-разработке, заинтересовало, записался на курсы для получения фундаментальных знаний.<br /><br />
						У меня есть жена и собака, ищу работу в Москве :) <br /><br />
						С 2019 года работаю в компании &laquo;АО Атлас-Карт&raquo; на должности &laquo;Инженер технической поддержки&raquo;.
					</p>

					<div className='about-me__links'>
						<a className='about-me__link' href="https://github.com/NikitaSavchuk97" target='blank'>github.com</a>
						<a className='about-me__link' href="https://vk.com/id26931131" target='blank'>vk.com</a>
					</div>

				</div>
				<img className='about-me__image' src={NS97} alt='Фотография' />
			</div>


		</section>
	)
}

export default AboutMe;