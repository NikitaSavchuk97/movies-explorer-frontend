import './Profile.css';
import { useContext } from "react";
import { Link } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';

import logo__authorized from '../../images/logo__authorized.svg';


function Profile({ logout }) {

	const currentUser = useContext(CurrentUserContext);

	return (
		<section className='profile'>

			<div className='profile__main'>
				<h2 className='profile__title'>
					Привет, {`${'Никита'}`} !
				</h2>

				<form className='profile__form' action="">

					<p className='profile__form-paragraph-name'>Имя</p>
					<input className='profile__form-input-name' type="name" />

					<p className='profile__form-paragraph-email'>Емайл</p>
					<input className='profile__form-input-email' type="email" />

					<button className='profile__form-submit' type='submit' disabled={'!isValid'}>
						Редактировать
					</button>

				</form>

				<button className='profile__logout' type='button' onClick={logout}>
					Выйти из аккаунта
				</button>
			</div>

		</section>
	)
}

export default Profile;