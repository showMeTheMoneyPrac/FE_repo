import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  productList: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProductList(state) {
      state.isLoading = true;
    },
    fetchProductListSuccess(state, { payload }) {
      state.isLoading = false;
      state.productList = [...state.productList, ...payload];
    },
  },
});

export const { fetchProductList, fetchProductListSuccess } =
  productSlice.actions;

export default productSlice.reducer;
