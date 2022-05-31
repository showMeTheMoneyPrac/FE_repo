import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bucketList: [],
  selectedList: [],
};

const bucketSlice = createSlice({
  name: 'bucket',
  initialState,
  reducers: {
    initBucketList: () => initialState,
    initBucketListSuccess(state, { payload }) {
      state.bucketList = payload;
    },
    selectBucketItem(state, { payload }) {
      state.selectedList = payload.type
        ? [...state.selectedList.filter((id) => id !== payload.id)]
        : [...state.selectedList, payload.id];
    },
    selectAllBucketItem(state, { payload }) {
      state.selectedList = payload
        ? state.bucketList.map((bucketItem) => bucketItem.cartId)
        : [];
    },
    removeBucketItem(state, { payload }) {},
    removeBucketItemSuccess(state, { payload }) {
      state.bucketList = payload;
    },
    updateBucketItemCount(state, { payload }) {},
    updateBucketItemCountSuccess(state, { payload }) {
      state.bucketList = state.bucketList.map((bucketItem) =>
        bucketItem.cartId === payload.id
          ? { ...bucketItem, ea: payload.ea }
          : bucketItem,
      );
    },
  },
});

export const {
  initBucketList,
  initBucketListSuccess,
  selectBucketItem,
  selectAllBucketItem,
  removeBucketItem,
  removeBucketItemSuccess,
  updateBucketItemCount,
  updateBucketItemCountSuccess,
} = bucketSlice.actions;
export default bucketSlice.reducer;
