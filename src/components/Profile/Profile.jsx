import './Profile.css';
import { useEffect, useState } from "react";

function Profile(props) {

	const currentUser = props.currentUser
	const [userName, setUserName] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [disabled, setDisabled] = useState(true);

	function handleNameChange(e) {
		setUserName(e.target.value);
		currentUser.name === e.target.value ? setDisabled(true) : setDisabled(false);
	}

	function handleEmailChange(e) {
		setUserEmail(e.target.value);
		currentUser.email === e.target.value ? setDisabled(true) : setDisabled(false);
	}

	function handleSetUserData(e) {
		e.preventDefault()
		const name = e.target.name.value
		const email = e.target.email.value
		props.handleSetUserInfo(name, email);
		setDisabled(true);
	}

	useEffect(() => {
		setUserName(currentUser.name);
		setUserEmail(currentUser.email);
	}, [currentUser]);

	return (
		<main className='profile'>

			<div className='profile__main' >
				<h2 className='profile__title'>
					Привет, {`${currentUser.name}`}!
				</h2>

				<form className='profile__form' onSubmit={handleSetUserData}>

					<div className='profile__field'>
						<label className='profile__form-paragraph-name'>Имя</label>
						<input className='profile__form-input-name' onChange={handleNameChange} name='name' pattern='[a-zA-Z][a-zA-Z0-9-_\.]{1,30}' value={userName} type="name" />
					</div>

					<div className='profile__field'>
						<label className='profile__form-paragraph-email'>Емайл</label>
						<input className='profile__form-input-email' onChange={handleEmailChange} name='email' pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" value={userEmail} type="email" />
					</div>

					{

						disabled ?
							<button className='profile__form-submit profile__form-submit_type_disabled' onSubmit={handleSetUserData} type='submit' disabled>
								Редактировать
							</button>
							:
							<button className='profile__form-submit' onSubmit={handleSetUserData} type='submit'>
								Редактировать
							</button>
					}

				</form>

				<button className='profile__logout' type='submit' onClick={props.handleLogout} >
					Выйти из аккаунта
				</button>
			</div>

		</main>
	)
}

export default Profile;