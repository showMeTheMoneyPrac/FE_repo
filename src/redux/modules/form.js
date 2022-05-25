import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  registForm: {
    email: '',
    nickname: '',
    baseAddress: '',
    detailAddress: '',
    password: '',
    passwordCheck: '',
  },
};

const formSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    initializeForm: () => initialState,
    changeRegistFormAddress(state, { payload: baseAddress }) {
      state.registForm.baseAddress = baseAddress;
    },
    changeRegistForm(state, { payload }) {
      state.registForm.email = payload.email;
      state.registForm.nickname = payload.nickname;
      state.registForm.password = payload.password;
      state.registForm.passwordCheck = payload.passwordCheck;
      state.registForm.detailAddress = payload.detailAddress;
    },
  },
});

export const { initializeForm, changeRegistFormAddress, changeRegistForm } =
  formSlice.actions;

export default formSlice.reducer;
