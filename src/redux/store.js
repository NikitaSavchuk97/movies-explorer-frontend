import { configureStore } from '@reduxjs/toolkit';

import movieSlice from '../redux/slices/movieSlice';
import errorSlice from './slices/errorSlice';
import userSlice from './slices/userSlice';
import loggedSlice from './slices/loggedSlice';

export const BASE_URL = 'https://api-snv-project-movies.ru';
//http://localhost:3002
//https://api-snv-project-movies.ru

export const store = configureStore({
  reducer: {
    movieSlice,
    errorSlice,
    userSlice,
    loggedSlice,
  },
});
