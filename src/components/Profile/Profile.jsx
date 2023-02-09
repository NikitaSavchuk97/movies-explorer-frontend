import './Profile.css';
import { useContext } from "react";
import CurrentUserContext from '../../contexts/CurrentUserContext.js';




function Profile({ logout }) {

	const currentUser = useContext(CurrentUserContext);

	return (
		<section className='profile'>

			<div className='profile__main'>
				<h2 className='profile__title'>
					Привет, {`${'Никита'}`}!
				</h2>

				<form className='profile__form' action="">

					<div className='profile__field'>
						<label className='profile__form-paragraph-name'>Имя</label>
						<input className='profile__form-input-name' type="name" />
					</div>

					<div className='profile__field'>
						<label className='profile__form-paragraph-email'>Емайл</label>
						<input className='profile__form-input-email' type="email" />
					</div>

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