import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  purchaseList: null,
  selectedList: [],
};

const purchaseSlice = createSlice({
  name: 'purchase',
  initialState,
  reducers: {
    initPurchaseList: () => initialState,
    initPurchaseListSuccess(state, { payload }) {
      state.purchaseList = payload.ordersList;
    },
    selectPurchaseItem(state, { payload }) {
      state.selectedList = payload.type
        ? [...state.selectedList.filter((id) => id !== payload.id)]
        : [...state.selectedList, payload.id];
    },
    selectAllPurchaseItem(state, { payload }) {
      const newArr = [];
      state.purchaseList.forEach((purchaseItem) => {
        purchaseItem.ordersDetailList.forEach((orderDetail) =>
          newArr.push(orderDetail.orderDetailId),
        );
      });
      state.selectedList = payload ? newArr : [];
    },
    createReview() {},
    createReviewSuccess(state, { payload }) {
      state.purchaseList = state.purchaseList.map((purchaseItem) => {
        const newOrderDetailList = purchaseItem.ordersDetailList.map(
          (orderDetail) =>
            orderDetail.orderDetailId === payload.orderDetailId
              ? {
                  ...orderDetail,
                  review: {
                    id: payload.reviewId,
                    title: payload.title,
                    content: payload.content,
                  },
                }
              : orderDetail,
        );
        return { ...purchaseItem, ordersDetailList: newOrderDetailList };
      });
    },
    updateReview() {},
    updateReviewSuccess(state, { payload }) {
      state.purchaseList = state.purchaseList.map((purchaseItem) => {
        const newOrderDetailList = purchaseItem.ordersDetailList.map(
          (orderDetail) => {
            return orderDetail.review?.id !== payload.reviewId
              ? orderDetail
              : {
                  ...orderDetail,
                  review: {
                    ...orderDetail.review,
                    id: payload.reviewId,
                    title: payload.reviewTitle,
                    content: payload.content,
                  },
                };
          },
        );
        return { ...purchaseItem, ordersDetailList: newOrderDetailList };
      });
    },
    deleteReview() {},
    deleteReviewSuccess(state, { payload }) {
      state.purchaseList = state.purchaseList.map((purchaseItem) => {
        const newOrderDetailList = purchaseItem.ordersDetailList.map(
          (orderDetail) =>
            orderDetail.review?.id !== payload
              ? orderDetail
              : { ...orderDetail, review: null },
        );
        return { ...purchaseItem, ordersDetailList: newOrderDetailList };
      });
    },
  },
});

export const {
  initPurchaseList,
  initPurchaseListSuccess,
  selectPurchaseItem,
  selectAllPurchaseItem,
  createReview,
  createReviewSuccess,
  updateReview,
  updateReviewSuccess,
  deleteReview,
  deleteReviewSuccess,
} = purchaseSlice.actions;
export default purchaseSlice.reducer;
