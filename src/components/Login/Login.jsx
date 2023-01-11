import './Login.css';
import logo__authorized from '../../images/logo__authorized.svg'
import { Link } from 'react-router-dom';

function Login() {
	return (
		<section className='login'>
			<form className='login__container'>
				<Link to='/' className='login__logo'>
					<img className='login__logo-svg' src={logo__authorized} alt="логотип" />
				</Link>
				<h2 className='login__title'>
					Рады видеть!
				</h2>
				<p className='login__input-upper-title'>Емайл</p>
				<input className='login__input' type="email" />
				<p className='login__input-upper-title'>Пароль</p>
				<input className='login__input' type="email" />
				<button className='login__submit' type='submit'>
					Войти
				</button>
				<div className='login__reg-container'>
					<p className='login__subtitle'>
						Еще не зарегистрирован?
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