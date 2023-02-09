import './AboutProject.css'

function AboutProject() {
	return (
		<section className="about-project" id='about-project'>

			<h2 className='about-project__about'>
				О проекте
			</h2>

			<div className='about-project__text'>

				<article className='about-project__item'>
					<h3 className='about-project__title'>
						Дипломный проект включал 5 этапов
					</h3>
					<p className='about-project__subtitle'>
						Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
					</p>
				</article>

				<article className='about-project__item'>
					<h3 className='about-project__title'>
						На выполнение диплома ушло 5 недель.
					</h3>
					<p className='about-project__subtitle'>
						У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
					</p>
				</article>

			</div>

			<div className='about-project__time'>

				<div className='about-project__backend'>
					<h3 className='about-project__backend-title'>
						1 неделя
					</h3>
					<p className='about-project__backend-subtitle'>
						Back-end
					</p>
				</div>

				<div className='about-project__frontend'>
					<h3 className='about-project__frontend-title'>
						4 недели
					</h3>
					<p className='about-project__frontend-subtitle'>
						Front-end
					</p>
				</div>

			</div>


		</section>
	);
};

export default AboutProject;