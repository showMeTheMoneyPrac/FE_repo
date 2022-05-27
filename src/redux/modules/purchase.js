import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  purchaseList: null,
};

const purchaseSlice = createSlice({
  name: 'purchase',
  initialState,
  reducers: {
    initPurchaseList(state, action) {},
  },
});

export const { initPurchaseList } = purchaseSlice.actions;
