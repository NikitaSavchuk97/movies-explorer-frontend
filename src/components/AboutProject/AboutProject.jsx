import './AboutProject.css'

function AboutProject() {
	return (
		<section className="about-project" id='about-project'>

			<h2 className='about-project__about'>
				О проекте
			</h2>

			<div className='about-project__main-info-container'>
				<p className='about-project__main-text'>
					То, что вы видите у себя на экране, это моя дипломная работа по курсам<br /> Яндекс.Практикума по напаравлению "ВЕБ-разработчик".<br /><br />
					Эта работа показывает чему я научился с 0 за период равный ~11 месяцам.

					<br />
					<br />
					Проект:
				</p>

				<ul>
					<li className='about-project__main-li'>Адаптирован под мобильные устройства</li>
					<li className='about-project__main-li'>Все интерактивные элементы имеют анимацию</li>
					<li className='about-project__main-li'>Регистрация и авторизация пользователя</li>
					<li className='about-project__main-li'>При попытке перейти на любой защищённый роут происходит редирект на главную страницу</li>
					<li className='about-project__main-li'>Вид шапки меняется в зависимости от авторизации,</li>
					<li className='about-project__main-li'>При поиске текст запроса, найденные фильмы и состояние переключателя короткометражек сохраняются в локальное хранилище</li>
					<li className='about-project__main-li'>Все формы валидируются на стороне клиента, пользователь не может отправить запрос с невалидными данными</li>
					<li className='about-project__main-li'>После любого действия на странице будут актуальные данные, т.е. проект не требует обновления страницы</li>
					<li className='about-project__main-li'>Пользователь может редактировать свои данные (имя и емайл)</li>
					<li className='about-project__main-li'>При изменении данных пользователь получает уведомление об успехе/ошибке</li>
					<li className='about-project__main-li'>При изменении данных пользователь, если новые данные аналогичны старым, кнопка отправки формы не будет доступна</li>
					<li className='about-project__main-li'>Для оптимизации, получение данных всех фильмов происходит всего 1 раз, после чего данные сохраняются в локальное хранилище</li>
					<li className='about-project__main-li'>Сетка фильмов зависит от ширины экрана. При клике на кнопку «Ещё» отобразится аналогичное верхнему ряду количество карточек</li>
					<li className='about-project__main-li'>Пользователь может сохранять/удалять фильмы</li>
					<li className='about-project__main-li'>При клике на постер фильма в новой вкладке открывает трейлер</li>
					<li className='about-project__main-li'>Если пользователь был авторизован и закрыл вкладку, он может вернуться обратно на любую страницу в течении 30 минут</li>
					<li className='about-project__main-li'>При попытке перейти на несуществующую страницу происходит редирект на страницу «404»</li>
				</ul>
			</div>

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