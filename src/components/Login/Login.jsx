import './Login.css';
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';

function Login(props) {

	function handleSubmit(e) {
		e.preventDefault()
		const email = e.target.email.value;
		const password = e.target.password.value;

		props.login(email, password);
	}


	return (
		<section className='login'>
			<form className='login__container' onSubmit={handleSubmit}>

				<Link to='/' className='login__logo'>
					<img className='login__logo-svg' src={logo} alt="логотип" />
				</Link>

				<h2 className='login__title'>
					Рады видеть!
				</h2>

				<p className='login__input-upper-title'>Емайл</p>
				<input className='login__input' name='email' type="email" autoComplete="on" required />

				<p className='login__input-upper-title'>Пароль</p>
				<input className='login__input' name='password' type="password" autoComplete="on" required />

				<button className='login__submit' type='submit' onSubmit={handleSubmit}>
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