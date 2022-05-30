import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  userInfo: null,
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
    fetchUserInfo: (state) => state,
    fetchUserInfoSuccess(state, { payload }) {
      state.userInfo = payload;
    },
  },
});

export const { userLogin, userLogout, fetchUserInfo, fetchUserInfoSuccess } =
  userSlice.actions;

export default userSlice.reducer;
