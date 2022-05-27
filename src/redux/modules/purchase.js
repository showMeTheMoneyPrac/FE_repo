import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  purchaseList: null,
};

const purchaseSlice = createSlice({
  name: 'purchase',
  initialState,
  reducers: {
    initPurchaseList: () => initialState,
    initPurchaseListSuccess(state, { payload }) {
      state.purchaseList = payload.ordersList;
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
  },
});

export const {
  initPurchaseList,
  initPurchaseListSuccess,
  updateReview,
  updateReviewSuccess,
} = purchaseSlice.actions;
export default purchaseSlice.reducer;
