import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';

const handleAuthPending = state => {
  state.isLoading = true;
};

const handleAuthRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    isLoggedIn: false,
    token: null,
    isRefreshing: false,
  },

  reducers: {
    resetError: state => {
      state.isError = false;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(register.pending, handleAuthPending)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isError = false;
      })
      .addCase(register.rejected, handleAuthRejected)

      .addCase(logIn.pending, handleAuthPending)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isError = false;
      })
      .addCase(logIn.rejected, handleAuthRejected)

      .addCase(logOut.pending, handleAuthPending)
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isError = false;
      })
      .addCase(logOut.rejected, handleAuthRejected)

      .addCase(refreshUser.pending, handleAuthPending)
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isError = false;
      })
      .addCase(refreshUser.rejected, handleAuthRejected);
  },
});

export const authReducer = authSlice.reducer;
export const { resetError } = authSlice.actions;
