import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
};

export const loggedSlice = createSlice({
  name: 'loggedIn',
  initialState,
  reducers: {
    setLoggedIn(state, action) {
      state.loggedIn = action.payload;
    },
  },
});

export const { setLoggedIn } = loggedSlice.actions;
export default loggedSlice.reducer;
