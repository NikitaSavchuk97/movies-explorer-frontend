import './Register.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Register(props) {

	function handleSubmit(e) {
		e.preventDefault();
		const name = e.target.name.value;
		const email = e.target.email.value;
		const password = e.target.password.value;

		props.registr(name, email, password)
	}

	return (
		<section className='register'>
			<form className='register__container' onSubmit={handleSubmit}>

				<Link to='/' className='register__logo'>
					<img className='register__logo-svg' src={logo} alt="логотип" />
				</Link>

				<h2 className='register__title'>
					Добро пожаловать!
				</h2>

				<p className='register__input-upper-title'>Имя</p>
				<input className='register__input' name='name' type="text" autoComplete="on" required />

				<p className='register__input-upper-title'>Емайл</p>
				<input className='register__input' name='email' type="email" autoComplete="on" required />

				<p className='register__input-upper-title'>Пароль</p>
				<input className='register__input' name='password' type="password" autoComplete="on" required />

				<button className='register__submit' onSubmit={handleSubmit} type='submit'>
					Зарегистрироваться
				</button>

				<div className='register__reg-container'>

					<p className='register__subtitle'>
						Уже зарегистрированы?
					</p>

					<Link to='/sign-in' className='register__registration'>
						Войти
					</Link>

				</div>

			</form>
		</section >
	)
}

export default Register;