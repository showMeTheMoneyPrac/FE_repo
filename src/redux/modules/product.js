import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProductList(state) {
      state.loading = true;
    },
  },
});

export const { fetchProductList } = productSlice.actions;

export default productSlice.reducer;
