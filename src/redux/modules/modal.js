import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  memberModal: {
    isOpen: false,
    loginModal: false,
    registModal: false,
  },
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    closeModal: () => initialState,
    openMemberModal(state, { payload }) {
      state.memberModal = {
        ...initialState.memberModal,
        isOpen: true,
        [payload.modal]: true,
      };
    },
  },
});

export const { closeModal, openMemberModal } = modalSlice.actions;

export default modalSlice.reducer;
