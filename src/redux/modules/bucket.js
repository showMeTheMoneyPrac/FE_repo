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
  },
});

export const {
  initBucketList,
  initBucketListSuccess,
  selectBucketItem,
  selectAllBucketItem,
  removeBucketItem,
  removeBucketItemSuccess,
} = bucketSlice.actions;
export default bucketSlice.reducer;
