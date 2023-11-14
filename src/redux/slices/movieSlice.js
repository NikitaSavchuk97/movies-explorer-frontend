import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getMovie = createAsyncThunk('movie/fetchMovieStatus', async () => {
  const { data } = await axios.get(`https://api.nomoreparties.co/beatfilm-movies`);
  return data;
});

const initialState = {
  movie: [],
  status: 'loading', // loading | success | error
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovie(state, action) {
      state.movie = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovie.pending, (state) => {
        state.status = 'loading';
        state.movie = [];
      })
      .addCase(getMovie.fulfilled, (state, action) => {
        state.movie = action.payload;
        state.status = 'success';
      })
      .addCase(getMovie.rejected, (state) => {
        state.movie = [];
        state.status = 'error';
      });
  },
});

export const { setMovie } = movieSlice.actions;
export default movieSlice.reducer;
