import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  memberModal: {
    isOpen: false,
    loginModal: false,
    registModal: false,
  },
  reviewModal: {
    visible: false,
    reviewId: null,
    orderDetailId: null,
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
    openReviewModal(state, { payload }) {
      console.log(payload);
      state.reviewModal = {
        ...state.reviewModal,
        visible: true,
        ...payload,
      };
    },
  },
});

export const { closeModal, openMemberModal, openReviewModal } =
  modalSlice.actions;

export default modalSlice.reducer;
