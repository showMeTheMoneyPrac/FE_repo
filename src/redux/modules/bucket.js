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
    incraeseProductCount(state, { payload }) {
      state.bucketList = state.bucketList.map((bucketItem) =>
        bucketItem.cartId === payload
          ? { ...bucketItem, ea: bucketItem.ea + 1 }
          : bucketItem,
      );
    },
    decreaseProductCount(state, { payload }) {
      state.bucketList = state.bucketList.map((bucketItem) =>
        bucketItem.cartId === payload
          ? { ...bucketItem, ea: bucketItem.ea - 1 }
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
  incraeseProductCount,
  decreaseProductCount,
} = bucketSlice.actions;
export default bucketSlice.reducer;
