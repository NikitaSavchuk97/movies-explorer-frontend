import axios from 'axios';
import { BASE_URL } from '../store';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async ({ name, email, password }) => {
    const { data } = await axios.post(
      `${BASE_URL}/signup`,
      {
        name: name,
        email: email,
        password: password,
      },
      { withCredentials: true },
    );
    return data;
  },
);

export const loginUser = createAsyncThunk('user/loginUser', async ({ email, password }) => {
  const { data } = await axios.post(
    `${BASE_URL}/signin`,
    {
      email: email,
      password: password,
    },
    { withCredentials: true },
  );
  return data;
});

export const getUser = createAsyncThunk('user/getUser', async () => {
  const { data } = await axios.get(`${BASE_URL}/users/me`, { withCredentials: true });
  return data;
});

export const updateUser = createAsyncThunk('user/updateUser', async ({ name, email }) => {
  const { data } = await axios.patch(
    `${BASE_URL}/users/me`,
    { name: name, email: email },
    { withCredentials: true },
  );
  return data;
});

export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
  const { data } = await axios.get(`${BASE_URL}/signout`, {
    withCredentials: true,
  });
  return data;
});

const initialState = {
  registerUserStatus: '',
  loginUserStatus: '',
  logoutUserStatus: '',
  currentUserStatus: '',
  currentUser: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.currentUser = action.payload;
    },
    setDefaultStatus(state) {
      state.registerUserStatus = '';
      state.currentUserStatus = '';
      state.loginUserStatus = '';
      state.logoutUserStatus = '';
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.registerUserStatus = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.registerUserStatus = 'success';
      })
      .addCase(registerUser.rejected, (state) => {
        state.registerUserStatus = 'error';
      })

      .addCase(loginUser.pending, (state) => {
        state.loginUserStatus = 'loading';
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.loginUserStatus = 'success';
      })
      .addCase(loginUser.rejected, (state) => {
        state.loginUserStatus = 'error';
      })

      .addCase(getUser.pending, (state) => {
        state.currentUser = {};
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.currentUser = {};
      })

      .addCase(updateUser.pending, (state) => {
        state.currentUserStatus = 'loading';
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.currentUserStatus = 'success';
        state.currentUser = action.payload;
      })
      .addCase(updateUser.rejected, (state) => {
        state.currentUserStatus = 'error';
      })

      .addCase(logoutUser.pending, (state) => {
        state.logoutUserStatus = 'loading';
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.logoutUserStatus = 'success';
        state.currentUser = {};
      })
      .addCase(logoutUser.rejected, (state) => {
        state.logoutUserStatus = 'error';
      });
  },
});

export const { setUser, setDefaultStatus } = userSlice.actions;
export default userSlice.reducer;
