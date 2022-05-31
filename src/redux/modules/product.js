import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  productList: [],
  page: 0,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    initializeProductList: () => initialState,
    fetchProductList(state) {
      state.isLoading = true;
    },
    fetchProductListSuccess(state, { payload }) {
      state.isLoading = false;
      state.productList = [...state.productList, ...payload];
    },
    changePage(state) {
      state.page = state.page + 1;
    },
  },
});

export const {
  initializeProductList,
  fetchProductList,
  fetchProductListSuccess,
  changePage,
} = productSlice.actions;

export default productSlice.reducer;
