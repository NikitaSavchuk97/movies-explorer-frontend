import { Route, Routes } from 'react-router-dom';
import './Footer.css';

function Footer() {

	const endpoints = [
		'/',
		'/profile',
		'/movies',
		'/movies-saved',
	]

	function html() {
		return (
			<section className='footer'>
				<h3 className='footer__title'>
					Учебный проект Яндекс.Практикум х BeatFilm.
				</h3>
				<div className='footer__links'>
					<span className='footer__span'>
						&copy; 2023
					</span>
					<a className='footer__link' href="https://practicum.yandex.ru/">
						Яндекс.Практикум
					</a>
					<a className='footer__link' href="https://github.com/">
						Github
					</a>
				</div>
			</section>
		)
	}

	return (
		<Routes>
			<Route
				path={'/'}
				element={
					html()
				}
			/>

			<Route
				path={'/profile'}
				element={
					html()
				}
			/>

			<Route
				path={'/movies'}
				element={
					html()
				}
			/>

			<Route
				path={'/movies-saved'}
				element={
					html()
				}
			/>

			<Route
				path='*'
				element={
					<>
					</>
				}
			/>
		</Routes >

	)
}

export default Footer;

/*
			<Route
				path='*'
				element={
					<>
					</>
				}
			/>

		<section className='footer'>
			<h3 className='footer__title'>
				Учебный проект Яндекс.Практикум х BeatFilm.
			</h3>
			<div className='footer__links'>
				<span className='footer__span'>
					&copy; 2023
				</span>
				<a className='footer__link' href="https://practicum.yandex.ru/">
					Яндекс.Практикум
				</a>
				<a className='footer__link' href="https://github.com/">
					Github
				</a>
			</div>
		</section>

*/