import './Register.css';
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';

function Register() {
	return (
		<section className='register'>
			<form className='register__container'>
				<Link to='/' className='register__logo'>
					<img className='register__logo-svg' src={logo} alt="логотип" />
				</Link>
				<h2 className='register__title'>
					Добро пожаловать!
				</h2>
				<p className='register__input-upper-title'>Емайл</p>
				<input className='register__input' type="email" autoComplete="on" />
				<p className='register__input-upper-title'>Пароль</p>
				<input className='register__input' type="password" autoComplete="on" />
				<p className='register__input-upper-title'>Повторите пароль</p>
				<input className='register__input' type="password" autoComplete="on" />
				<button className='register__submit' type='submit'>
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
		</section>
	)
}

export default Register;