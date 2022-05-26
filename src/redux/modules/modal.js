import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  memberModal: {
    isOpen: false,
    loginModal: false,
    registModal: false,
  },
  reviewModal: false,
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
    openReviewModal(state) {
      state.reviewModal = {
        ...state,
        reviewModal: true,
      };
    },
  },
});

export const { closeModal, openMemberModal, openReviewModal } =
  modalSlice.actions;

export default modalSlice.reducer;
