import './Register.css';
import logo from '../../images/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser, loginUser, getUser } from '../../redux/slices/userSlice';
import { setLoggedIn } from '../../redux/slices/loggedSlice';
import { setError } from '../../redux/slices/errorSlice';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { registerUserStatus } = useSelector((state) => state.userSlice);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (registerUserStatus == 'loading') {
      dispatch(setError({ error: true, message: 'В процессе регистрации пользователя...' }));
    } else if (registerUserStatus == 'success') {
      dispatch(
        setError({
          error: true,
          message: 'Вы успешно зарегистрированны!\nАвтоматический вход через 3 секунды...',
        }),
      );
      dispatch(loginUser({ email, password }));
      setTimeout(() => {
        dispatch(getUser());
        dispatch(setLoggedIn(true));
        navigate('/');
      }, 3000);
    } else if (registerUserStatus == 'error') {
      dispatch(setError({ error: true, message: 'Пользователь с таким емайлом уже существует!' }));
    }
  }, [registerUserStatus]);

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }));
  }

  return (
    <section className='register'>
      <form className='register__container' onSubmit={handleSubmit}>
        <Link to='/' className='register__logo'>
          <img className='register__logo-svg' src={logo} alt='логотип' />
        </Link>

        <h2 className='register__title'>Добро пожаловать!</h2>

        <p className='register__input-upper-title'>Имя</p>
        <input
          className='register__input'
          onChange={handleChangeName}
          name='name'
          type='text'
          autoComplete='current-name'
          //pattern='[a-zA-Z][a-zA-Z0-9-_\.]{1,30}'
          required
          value={name}
        />

        <p className='register__input-upper-title'>Емайл</p>
        <input
          className='register__input'
          onChange={handleChangeEmail}
          name='email'
          type='email'
          autoComplete='current-email'
          //pattern='[^@]+@[^@]+\.[a-zA-Z]{2,6}'
          required
          value={email}
        />

        <p className='register__input-upper-title'>Пароль</p>
        <input
          className='register__input'
          onChange={handleChangePassword}
          name='password'
          type='password'
          autoComplete='current-password'
          //pattern="(?=^.{5,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
          required
          value={password}
        />

        <button className='register__submit' onSubmit={handleSubmit} type='submit'>
          Зарегистрироваться
        </button>

        <div className='register__reg-container'>
          <p className='register__subtitle'>Уже зарегистрированы?</p>

          <Link to='/sign-in' className='register__registration'>
            Войти
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Register;
