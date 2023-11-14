import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  errorValue: false,
  errorMessage: '',
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError(state, action) {
      state.errorValue = action.payload.error;
      state.errorMessage = action.payload.message;
    },
    clearError(state) {
      state.errorValue = false;
      state.errorMessage = '';
    },
  },
});

export const { setError, clearError } = errorSlice.actions;
export default errorSlice.reducer;
