import './Register.css';
import logo__authorized from '../../images/logo__authorized.svg'
import { Link } from 'react-router-dom';

function Register() {
	return (
		<section className='register'>
			<form className='register__container'>
				<Link to='/' className='register__logo'>
					<img className='register__logo-svg' src={logo__authorized} alt="логотип" />
				</Link>
				<h2 className='register__title'>
					Добро пожаловать!
				</h2>
				<p className='register__input-upper-title'>Емайл</p>
				<input className='register__input' type="email" />
				<p className='register__input-upper-title'>Пароль</p>
				<input className='register__input' type="email" />
				<p className='register__input-upper-title'>Повторите пароль</p>
				<input className='register__input' type="email" />
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