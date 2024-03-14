import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../axios_instance";

const initialState = {
  products: [],
  categories: [],
  count: null,
  loading_products: false,
  error_products: false,
};

export const fetch_products = createAsyncThunk(
  "/fetch_products",
  async ({ name, category }) => {
    try {
      const res = await AxiosInstance.get(
        `/product/fetch_products/${category}/${name}`
      );
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetch_products.pending, (state) => {
      state.loading_products = true;
    });
    builder.addCase(fetch_products.rejected, (state) => {
      state.loading_products = false;
      state.error_products = true;
    });
    builder.addCase(fetch_products.fulfilled, (state, action) => {
      state.loading_products = false;
      state.products = action.payload.products;
      state.categories = action.payload.categories?.value || [];
      state.count = action.payload.count?.value || null;
    });
  },
});

export default productSlice.reducer;
