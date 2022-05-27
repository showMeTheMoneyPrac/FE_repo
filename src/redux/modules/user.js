import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogin(state) {
      state.isLoggedIn = true;
    },
    userLogout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const { userLogin, userLogout } = userSlice.actions;

export default userSlice.reducer;
