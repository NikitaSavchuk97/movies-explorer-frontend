import './Profile.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser, updateUser, setDefaultStatus } from '../../redux/slices/userSlice';
import { setMovie } from '../../redux/slices/movieSlice';
import { setError } from '../../redux/slices/errorSlice';
import { setLoggedIn } from '../../redux/slices/loggedSlice';

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { logoutUserStatus, currentUserStatus, currentUser } = useSelector(
    (state) => state.userSlice,
  );

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setUserName(currentUser.name);
    setUserEmail(currentUser.email);
  }, [currentUser]);

  useEffect(() => {
    if (currentUserStatus === 'loading') {
      dispatch(setError({ error: true, message: 'В процессе изменения данных...' }));
    } else if (currentUserStatus === 'success') {
      dispatch(setError({ error: true, message: 'Данные изменены!' }));
    } else if (currentUserStatus === 'error') {
      dispatch(setError({ error: true, message: 'Пользователь с таким емайлом уже существует!' }));
    }
  }, [dispatch, currentUserStatus]);

  useEffect(() => {
    if (logoutUserStatus === 'success') {
      document.cookie = 'jwt=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT';

      localStorage.removeItem('resultOfSearch');
      localStorage.removeItem('movieName');
      localStorage.removeItem('shortMovie');
      dispatch(setMovie([]));
      dispatch(setLoggedIn(false));
      dispatch(setDefaultStatus());
      navigate('/');
    }
  }, [dispatch, navigate, logoutUserStatus]);

  function handleLogout() {
    dispatch(logoutUser());
  }

  function handleNameChange(e) {
    setUserName(e.target.value);
    currentUser.name === e.target.value ? setDisabled(true) : setDisabled(false);
  }

  function handleEmailChange(e) {
    setUserEmail(e.target.value);
    currentUser.email === e.target.value ? setDisabled(true) : setDisabled(false);
  }

  function handleSetUserData(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    dispatch(updateUser({ name, email }));
    setDisabled(true);
  }

  return (
    <main className='profile'>
      <div className='profile__main'>
        <h2 className='profile__title'>Привет, {currentUser.name}!</h2>

        <form className='profile__form' onSubmit={handleSetUserData}>
          <div className='profile__field'>
            <label className='profile__form-paragraph-name'>Имя</label>
            <input
              className='profile__form-input-name'
              onChange={handleNameChange}
              name='name'
              //pattern='[a-zA-Z][a-zA-Z0-9-_\.]{1,30}'
              value={userName || ''}
              type='name'
            />
          </div>

          <div className='profile__field'>
            <label className='profile__form-paragraph-email'>Емайл</label>
            <input
              className='profile__form-input-email'
              onChange={handleEmailChange}
              name='email'
              //pattern='[^@]+@[^@]+\.[a-zA-Z]{2,6}'
              value={userEmail || ''}
              type='email'
            />
          </div>

          {disabled ? (
            <button
              className='profile__form-submit profile__form-submit_type_disabled'
              type='submit'
              disabled
            >
              Редактировать
            </button>
          ) : (
            <button className='profile__form-submit' type='submit'>
              Редактировать
            </button>
          )}
        </form>

        <button className='profile__logout' type='submit' onClick={handleLogout}>
          Выйти из аккаунта
        </button>
      </div>
    </main>
  );
}

export default Profile;
