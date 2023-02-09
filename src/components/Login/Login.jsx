import './Login.css';
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';

function Login() {
	return (
		<section className='login'>
			<form className='login__container'>
				<Link to='/' className='login__logo'>
					<img className='login__logo-svg' src={logo} alt="логотип" />
				</Link>
				<h2 className='login__title'>
					Рады видеть!
				</h2>
				<p className='login__input-upper-title'>Емайл</p>
				<input className='login__input' type="email" autoComplete="on" />
				<p className='login__input-upper-title'>Пароль</p>
				<input className='login__input' type="password" autoComplete="on" />
				<button className='login__submit' type='submit'>
					Войти
				</button>
				<div className='login__reg-container'>
					<p className='login__subtitle'>
						Еще не зарегистрированы?
					</p>
					<Link to='/sign-up' className='login__registration'>
						Регистрация
					</Link>
				</div>
			</form>
		</section>
	)
}

export default Login;