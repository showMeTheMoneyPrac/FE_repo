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
  loginForm: {
    email: '',
    password: '',
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
    changeFormInput(state, { payload }) {
      state[payload.form][payload.target] = payload.value;
    },
  },
});

export const { initializeForm, changeRegistFormAddress, changeFormInput } =
  formSlice.actions;

export default formSlice.reducer;
