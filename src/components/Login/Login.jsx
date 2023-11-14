import './Login.css';
import logo from '../../images/logo.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedIn } from '../../redux/slices/loggedSlice';
import { getUser, loginUser } from '../../redux/slices/userSlice';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setError } from '../../redux/slices/errorSlice';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginUserStatus } = useSelector((state) => state.userSlice);

  useEffect(() => {
    if (loginUserStatus == 'error') {
      dispatch(setError({ error: true, message: 'Не верный логин или пароль' }));
    } else if (loginUserStatus == 'success') {
      dispatch(getUser());
      //dispatch(setLoggedIn(true));
      navigate('/');
    }
  }, [loginUserStatus]);

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  }

  return (
    <section className='login'>
      <form className='login__container' onSubmit={handleSubmit}>
        <Link to='/' className='login__logo'>
          <img className='login__logo-svg' src={logo} alt='логотип' />
        </Link>

        <h2 className='login__title'>Рады видеть!</h2>

        <p className='login__input-upper-title'>Емайл</p>
        <input
          className='login__input'
          onChange={handleChangeEmail}
          name='email'
          type='email'
          autoComplete='current-email'
          pattern='[^@]+@[^@]+\.[a-zA-Z]{2,6}'
          required
          value={email}
        />

        <p className='login__input-upper-title'>Пароль</p>
        <input
          className='login__input'
          onChange={handleChangePassword}
          name='password'
          type='password'
          autoComplete='current-password'
          //pattern="(?=^.{5,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
          required
          value={password}
        />

        <button className='login__submit' type='submit' onSubmit={handleSubmit}>
          Войти
        </button>

        <div className='login__reg-container'>
          <p className='login__subtitle'>Еще не зарегистрированы?</p>

          <Link to='/sign-up' className='login__registration'>
            Регистрация
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Login;
